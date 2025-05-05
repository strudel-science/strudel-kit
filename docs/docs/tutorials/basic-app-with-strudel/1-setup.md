# Setup Your Project

The first step is to start a terminal program. The rest of this tutorial will assume you are using a standard MacOS, UNIX, or [Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4) (not command.exe) terminal. This ensures that all the command line steps follow the same syntax.

Then, make sure you have followed the instructions on the [Installation](/strudel-kit/docs/getting-started/installation) page so that you have node, npm, and npx installed on your system. You can confirm you have these tools using the commands below:

```
node --version
npm --version
npx --version
```

## Generate a New Project

Start a new project named `planets-app` using the strudel-kit code:

```
npx degit strudel-science/strudel-kit planets-app
```

Note that this may prompt you to install degit from npm. Make sure you click select "yes" to install it.

Once installed, this will generate a new folder called `planets-app` with the strudel-kit base app and Task Flow templates embedded in it. See the [Project Structure](/strudel-kit/docs/getting-started/project-structure) page to get a breakdown of all the generated files.

## Run Your Project

Go into the new directory:

```bash
cd planets-app
```

Install the app dependencies:

```bash
npm install
```

Start up your app locally:

```bash
npm start
```

Open your app in the browser at http://localhost:5175

In the future, when you run your app, you will not need to perform the install step -- just `npm start`. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don't need to stop and restart the app for each change.

## Open Your Application Code

For the rest of the tutorial you will need a code editor to make changes to the files in your app. We recommend [VSCode](https://code.visualstudio.com/) but any editor will do.

From your code editor, open the `planets-app` folder.
