// const readline = require('node:readline');
const { argv } = require('node:process');
const { mkdir, cpSync, opendirSync, openSync, readFileSync, writeFileSync } = require('node:fs');
const { open } = require('node:fs/promises')
const path = require('node:path');
const debug = require('debug')('strudel');
const YAML = require('yaml');

/**
 * Global constants.
 */
const HELP_OPT = 'h';
const DIR_OPT = 'd';
const FORCE_FLAG = 'f';
const VB_FLAG = 'v';
const POS_OPT = '#';

const SRC_DIR = 'src';
const TASK_FLOWS_DIR = 'app';

const DEFAULT_CONFIG = 'app.yaml';

let verbosity = 0;  // global flag for print()

/**
 * Simple wrapper to output to console.
 */
function print(s, err = false) {
    if (err)
        console.error(`ERROR: ${s}`);
    else if (verbosity > 0)
        console.info(`INFO: ${s}`);
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
 * Strudel application
 */
class StrudelApp {
    constructor(config) {
        this.config = config;
        this.appName = config.application.name;
        this.srcRoot = path.normalize(path.join(__dirname, '..'));
    }

    /**
     * Create new app.
     */
    async create() {
        debug(`create app`);
        const appFilename = this.appName
            .replace(/[^a-zA-Z0-9_\-.]|\s+/g, '-') // - replace weird chars with dash
            .replace(/-+/g, '-')                   // - eliminate multiple dashes
            .replace(/^-/, '')                     // - strip leading dash
            .replace(/-$/, '');
        this.dstRoot = path.join(this.config.options.directory, appFilename);
        this._copyApp();
        debug(`flows = ${JSON.stringify(this.config.flows)}`);
        for (const name in this.config.flows) {
            this.config.flows[name] ??= {};
            await this._addFlow(name, this.config.flows[name]);
        }
    }

    /**
     * Copy application
     */
    async _copyApp() {
        debug(`(create)app app=${this.appName} src=${this.srcRoot} dst=${this.dstRoot}`);

        const overwrite = this.config.options.force;

        // make empty task-flows dir
        this.mkdir(path.join(SRC_DIR, TASK_FLOWS_DIR)).then((x) => {});

        // copy directories
        const srcDirs = ['public', path.join(SRC_DIR, 'components')]; // skips src/app
        srcDirs.map((d) => this.copyNode(d, d, true, overwrite));

        // copy more files
        ['package.json', 'tsconfig.json'].map((p) => this.copyNode(p, p, false));
        ['App.css', 'App.tsx', 'App.test.tsx'].map((p) => this.copyNode(
            path.join('src', 'app', p), path.join('src', 'app', p), false
        ));
        ['declarations.d.ts', 'index.css', 'index.tsx', 'logo.svg',
        'react-app-env.d.ts', 'reportWebVitals.ts', 'setupTests.ts'].map((p) => this.copyNode(
            path.join('src', p), path.join('src', p), false
        ));

        const homeDir = path.join(SRC_DIR, TASK_FLOWS_DIR, 'home');
        this.mkdir(homeDir).then((x) => {});
    }

    /**
     * Add a task flow.
     */
    async _addFlow(flowName, config) {
        const doForce = this.config.options.force;

        let newName = '', renamed = false;
        if ('name' in config) {
            newName = config.name;
            renamed = true;
        } else {
            newName = flowName;
            renamed = false;
        }
        debug(`Copying to appname = ${newName}`)
        debug(`add-flow app=${this.appName} flow=${flowName} src=${this.srcRoot} dst=${this.dstRoot}`);

        // check for input directory
        let tmpd;
        const srcDir = path.join(this.srcRoot, SRC_DIR, TASK_FLOWS_DIR, flowName);
        try {
            tmpd = opendirSync(srcDir);
            await tmpd.close();
        } catch (error) {
            print(`Failed to open source task flow '${flowName}' in '${srcDir}'`);
            print(`Failure details: ${error.message}`);
            return;
        }

        // check for output directory (if no overwrite)
        const dstDir = path.join(this.dstRoot, SRC_DIR, TASK_FLOWS_DIR);
        const dstAppDir = path.join(dstDir, newName);
        if (!doForce) {
            try {
                tmpd = opendirSync(dstAppDir);
                print(`Output directory '${dstAppDir}' exists and -f (force) not specified`, true);
                await tmpd.close();
                return;
            } catch (error) {
                debug(`Output dir does not exist (expected): ${error}`);
            }
        }

        // copy task flow directory
        try {
            const src = path.join(SRC_DIR, TASK_FLOWS_DIR, flowName);
            const dst = path.join(SRC_DIR, TASK_FLOWS_DIR, newName);
            this.copyNode(src, dst, true, doForce);
        } catch (e) {
            print(`abort on copy error: ${e.message}`, true);
            return;
        }

        print(`task flow ${newName} created in ${dstAppDir}`);

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
    async mkdir(p) {
        await mkdir(path.join(this.dstRoot, path.normalize(p)), {recursive: true}, (err) => {
            if (err) throw new Error(`Making target directories: ${err}`);
        });
    }
}


/**
 * Generic parsing of arguments into an object with the options as
 * key/value pairs and the positional arguments under teh special key 'POS_OPT'.
 */
function parseArgs(args, flags = '') {
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
 * Check parsed command-line arguments
 *
 * @param options Parsed arguments
 * @returns {boolean} Whether they are OK
 */
function checkArgs(options, ) {
    debug(`options=${JSON.stringify(options)}`);
    const unknown = unknownOption(options, 'hfdv#');
    if (HELP_OPT in options)
        print('Help');
    else if (unknown)
        print(`Unknown option ${unknown}`, true);
    else if (options[POS_OPT].length > 1)
        print('Too many arguments: expected configuration file', true);
    else
        return true;
    return false;
}

/**
 * Print help message
 */
function printHelp() {
    print(`Syntax: [options] [config-file = ${DEFAULT_CONFIG}]`);
    print('Options:');
    print('  -h      Print this message');
    print('  -f      Force overwrite of existing content)');
    print('  -v      Verbose output');
}

/**
 * Program entry point.
 */
async function main() {
    let exec, prog, subcmd, args;
    [exec, prog, ...args] = argv;

    debug('main program :: begin');
    debug(`exec=${exec} prog=${prog} app-dir=${__dirname}`);

    const options = parseArgs(args, VB_FLAG + FORCE_FLAG);
    if (!checkArgs(options)) {
        printHelp();
        return 1;
    }

    // set global verbosity flag
    if (VB_FLAG in options) {
        verbosity = 1;
    }

    // Extract filename
    const posArgs = options[POS_OPT];
    const filename = posArgs.length === 1 ? posArgs[0] : DEFAULT_CONFIG;
    let config;

    // Parse config
    let configFile;
    try {
        configFile = await open(filename);
        const data = await configFile.readFile({encoding: 'utf-8'});
        config = YAML.parse(data);
    }
    catch (error) {
        print(`Cannot parse configuration file, '${filename}`, true);
        return 2;
    }
    finally {
        await configFile.close();
    }
    // add options
    config.options = {
        force: (FORCE_FLAG in options),
        verbose: (VB_FLAG in options),
        directory: DIR_OPT in options ? options[DIR_OPT] : '.'
    }
    debug(`config: ${JSON.stringify(config)}`);

    // run
    const app = new StrudelApp(config);
    try {
        await app.create();
    }
    catch (err) {
        if (err.code === 'ERR_FS_EISDIR') {
            debug(`app.create error: ${err}`);
            print(`Cannot overwrite existing directory '${app.dstRoot}', use -f flag to force`, true);
        }
        else if (err.code === 'ERR_FS_CP_EEXIST') {
            debug(`app.create error: ${err}`);
            print(`Cannot overwrite existing file in '${app.dstRoot}', use -f flag to force`, true);
        }
        else {
            print(`Application error: ${err}`, true);
        }
        return 2;
    }

    console.log(`\nSuccess! New application is in '${app.dstRoot}/'`);

    debug('main program :: end');
    return 0;
}

main();
