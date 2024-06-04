# `strudel`

The strudel-cli allows you to bootstrap apps and Task Flow templates based on the STRUDEL Design System. 

Get started using the base command `strudel`.

**Usage**:

```console
$ strudel [OPTIONS] COMMAND [ARGS]...
```

**Options**:

* `-v, --version`
* `--install-completion`: Install completion for the current shell.
* `--show-completion`: Show completion for the current shell, to copy it or customize the installation.
* `--help`: Show this message and exit.

**Commands**:

* `add-taskflow`: Add a new task flow section to an existing...
* `create-app`: Create a base strudel web application.

## `strudel add-taskflow`

Add a new task flow section to an existing strudel web application.

**Usage**:

```console
$ strudel add-taskflow [OPTIONS] [NAME]
```

**Arguments**:

* `[NAME]`: The name of your task flow module. It's best to use only letters, hyphens, and underscores.

**Options**:

* `-t, --template [compare-data|contribute-data|explore-data|monitor-activities|run-computation|search-data-repositories]`: Name of the strudel task flow template to use as the basis for your task flow.
* `-c, --config TEXT`: JSON file with configuration values to use to build your task flow.
* `-o, --output-dir TEXT`: Directory where the task flow module should be created.  [default: src/app]
* `-b, --branch TEXT`: Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.  [default: main]
* `--help`: Show this message and exit.

## `strudel create-app`

Create a base strudel web application.

**Usage**:

```console
$ strudel create-app [OPTIONS] [NAME]
```

**Arguments**:

* `[NAME]`: The name of your app. It's best to use only letters, hyphens, and underscores.

**Options**:

* `-c, --config TEXT`: JSON file with configuration values to use to build your app.
* `-o, --output-dir TEXT`: Directory where the app should be created. Defaults to current directory.
* `-b, --branch TEXT`: Branch in strudel-kit repo that should be used for the templates. This option is primarily for use by contributors.  [default: main]
* `-v, --verbose`: [default: 0]
* `--help`: Show this message and exit.
