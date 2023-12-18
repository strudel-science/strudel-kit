// const readline = require('node:readline');
const { argv } = require('node:process');
const { mkdir, cpSync, opendirSync } = require('node:fs');
const path = require('node:path');
const debug = require('debug')('strudel');

/**
 * Global constants.
 */
const HELP_OPT = 'h';
const DIR_OPT = 'd';
const POS_OPT = '#';


/**
 * Simple wrapper to output to console.
 */
function print(s, err = false) {
    if (err)
        console.error(`ERROR: ${s}`);
    else
        console.info(s);
}

/**
 * Generic parsing of arguments into an object with the options as
 * key/value pairs and the positional arguments under teh special key 'POS_OPT'.
 */
function parseArgs(args, flags='') {
    let options = {};
    options[POS_OPT] = [];
    let lastOpt = '';
    for (const a of args) {
        if (a.indexOf('-') === 0) {
            if (a.length === 1) {
                throw new Error('empty option');
            }
            let optName = a[1];
            if (flags.indexOf(optName) !== -1) {
                options[optName] = true;
            }
            else if (a.length === 2) {
                options[optName] = '';
                lastOpt = optName;
            }
            else {
                options[optName] = a.substring(2);
            }
        }
        else if (lastOpt !== '') {
            options[lastOpt] = a;
            lastOpt = '';
        }
        else {
            options[POS_OPT].push(a);
        }
    }
    debug(`parsed options: ${JSON.stringify(options)}`);
    return options;
}

/**
 * Look for options (keys in object) not in 'known' list.
 * Returns first unknown option, or empty string if they are all known.
 */
function unknownOption(options, known) {
    for (const o in options) {
        if (known.indexOf(o) === -1) {
            return o;
        }
    }
    return '';
}


/**
 * Encapsulate shared command-line interface functionality.
 */
class StrudelCLI {
    constructor(options) {
        this.appName = options[POS_OPT][0];
        this.srcRoot = path.normalize(path.join(__dirname, '..'));
        const makeFilename = (n) => n             // Make a standard filename:
            .replace(/[^a-zA-Z0-9_\-.]|\s+/g, '-') // - replace weird chars with dash
            .replace(/-+/g, '-')                   // - eliminate multiple dashes
            .replace(/^-/, '')                     // - strip leading dash
            .replace(/-$/, '');                    // - strip trailing dash
        this.dstRoot = (DIR_OPT in options) ? options[DIR_OPT] : makeFilename(this.appName);
    }

    /**
     * Copy file or directory.
     *
     * @param p Path to source
     * @param dir Whether this is a directory or not
     * @param  overwrite Flag for overwrite allowed
     * @returns {{dst: string/path, src: string}}
     */
    copyNode(p1, p2, dir = false, overwrite = true) {
        p1 = path.normalize(p1);
        p2 = path.normalize(p2);
        const srcPath = path.join(this.srcRoot, p1);
        const dstPath = path.join(this.dstRoot, p2);
        const nodeType = dir ? 'directory' : 'file';
        let options = {};
        if (dir) {
            options.recursive = true;
            options.force = false;
            options.errorOnExist = !overwrite;
        }
        print(`copy ${nodeType}, ${srcPath} -> ${dstPath}`);
        cpSync(srcPath, dstPath, options);
        return {src: srcPath, dst: dstPath};
    }

    /**
     * Make a directory under the destination root.
     *
     * @param p Relative path to directory to be created
     */
    mkdir(p) {
        mkdir(path.join(this.dstRoot, path.normalize(p)), {recursive: true}, (err) => {
            if (err) throw new Error(`Making target directories: ${err}`);
        });
    }
}

/**
 * Create new application command.
 * @param options
 */
function appCmd(options) {
    const unknown = unknownOption(options, 'dh#');
    const posargs = options[POS_OPT].length === 1;
    if (!posargs || unknown || (HELP_OPT in options)) {
        if (unknown) {
            print(`Unknown option -${unknown}`, true);
        } else if (!posargs) {
            print('Expected one argument for "name"', true);
        } else {
            print('Create new application')
        }
        print('Syntax: app [options] app-name');
        print('Options:');
        print('  -h      Print this message');
        print('  -d dir  Target directory (default=current)');
        return;
    }

    const cli = new StrudelCLI(options);

    debug(`(create)app app=${cli.appName} src=${cli.srcRoot} dst=${cli.dstRoot}`);

    // make empty task-flows dir
    cli.mkdir('src/task-flows');

    // copy directories
    const srcDirs = ['public', 'src/components', 'src/pages']; // skips src/task-flows
    srcDirs.map((d) => cli.copyNode(d, d, true));

    // copy selected top-level files
    ['package.json', 'tsconfig.json'].map((p) => cli.copyNode(p, p, false));
}

/**
 * Add application flow command.
 *
 * @param options
 */
function flowAddCmd(options) {
    debug(`options=${JSON.stringify(options)}`);
    const unknown = unknownOption(options, 'dhf#');
    const posargs = 2 <= options[POS_OPT].length <= 3;
    if (!posargs || unknown || (HELP_OPT in options)) {
        if (unknown) {
            print(`Unknown option ${unknown}`, true);
        } else if (!posargs) {
            print('Expected arguments for app-name and flow-name, and optionally destination flow-name', true);
        } else {
            print('Create new application')
        }
        print('Syntax: add-flow [options] app-name source-task-flow-name [dest-task-flow-name]');
        print('Options:');
        print('  -h      Print this message');
        print('  -d dir  Target directory (default=current)');
        print('  -f      Force overwrite of existing content)');
        return;
    }

    const cli = new StrudelCLI(options);
    const flowName = options[POS_OPT][1];
    const doForce = options.f

    let newName = '';
    if (options[POS_OPT].length > 2) {
        newName = options[POS_OPT][2];
        debug(`renaming task flow ${flowName} -> ${newName}`);
    }
    else {
        newName = flowName;
    }

    debug(`add-flow app=${cli.appName} flow=${flowName} src=${cli.srcRoot} dst=${cli.dstRoot}`);

    // check for input directory
    const srcDir = path.join(cli.srcRoot, 'src', 'task-flows', flowName);
    try {
        const tmpd = opendirSync(srcDir);
    }
    catch(error) {
        print(`Failed to open source task flow '${flowName}' in '${srcDir}'`);
        print(`Failure details: ${error.message}`);
        return;
    }

    // check for output directory (if no overwrite)
    const dstDir = path.join(cli.dstRoot, 'src', 'task-flows');
    const dstAppDir = path.join(dstDir, newName);
    if (!doForce) {
        try {
            const tmpd = opendirSync(dstAppDir);
            print(`Output directory '${dstAppDir}' exists and -f (force) not specified`, true);
            return;
        }
        catch(error) {
            debug(`Output dir does not exist (expected): ${error}`);
        }
    }

    // copy task flow directory
    try {
        const src = path.join('src', 'task-flows', flowName);
        const dst = path.join('src', 'task-flows', newName);
        cli.copyNode(src, dst, true, doForce);
    }
    catch (e) {
        print(`abort on copy error: ${e.message}`, true);
        return;
    }

    // rename task flow in copied area
    print(`new task flow ${newName} created in ${dstAppDir}`);

}


/**
 * Program entry point.
 */
function main() {
    let exec, prog, subcmd, args;
    [exec, prog, subcmd, ...args] = argv;

    debug('main program :: begin');
    debug(`exec=${exec} prog=${prog}`);
    debug(`app dir = ${__dirname}`);

    let subcommands = {
        'app': [appCmd, 'Create application'],
        'add-flow': [flowAddCmd, 'Add a task flow to an application', 'f']
    }
    if (subcmd in subcommands) {
        let options;
        try {
            options = parseArgs(args, subcommands[subcmd][2]);
        }
        catch (e) {
            print(`Error parsing arguments: ${e}`, true);
            return;
        }
        subcommands[subcmd][0](options);
    }
    else {
        if (subcmd === undefined)
            print('Syntax: node strudel.js [command]');
        else
            print(`Unknown command: ${subcmd}`, true);
        print('Commands:');
        for (const s in subcommands) {
            print(`  ${s}: ${subcommands[s][1]}`);
        }
    }

    debug('main program :: done');
}

main();
