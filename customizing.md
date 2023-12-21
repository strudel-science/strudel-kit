# Customizing a task flow (notes)

Before you get started, clone the repo and follow install instructions in the README.md file in the top directory.

## Configure your new app

Modify the configuration file app.yaml (see https://yaml.org or one of the many guides like https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html for YAML syntax).

For this example, just uncomment the line "exploring-datasets:", which will add the task flow by that name.
The resulting file (without comments) will be:
```yaml
application:
    name: "my application"
flows:
    exploring-entities:
```

## Run the strudel script to create the app

Run:
```shell
npm run strudel
```

This makes a copy of necessary files, including any task flows you have configured in the configuration file described previously.

By default, the files are copied into a directory named after your application,
with spaces and other special characters changed to dashes.
In this example, the new directory will be called `my-application`.
You should change to this directory before continuing.

```shell
cd my-application
```

## Install and run

The new application directory is itself a package, so you need to run the same install steps you did for STRUDEL itself (make sure you changed to this directory first!):

```shell
npm install
```

You can't run the build until you go through and remove references to all the task flows that you did NOT copy into this directory

These are in the following files:

* src/app/App.tsx
* src//app/home/TaskFlowsPage.tsx

```shell
npm build
```

If this succeeds, you can run the app
```shell
npm start
```

## Customizing the app

### Set project name

Open the main page, _ExploringEntitiesContent.tsx_, of your copied task flow in an editor.
```shell
cd my-application/src/app/exploring-entities
edit ExploringEntititesContent.tsx
```

In that directory find the section that looks like this:
```typescript jsx
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Project name
</Typography>
```
Change the 'Project name' to something else, e.g., 'My Very Nice Project'.
If you are still running the application the name should refresh
automatically.
If not, just run `npm start` at the top-level again to show the new version.


## Load your own data

