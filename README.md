# STRUDEL Kit

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. The app is intended to be used as a starting point for building out a web app that includes one or more of the task flows provided.

[Browse the Docs](https://strudel.science/strudel-kit/docs/)

## Getting Started on the 2i2c Workshop Hub

Pull the [strudel-kit](https://github.com/strudel-science/strudel-kit) repository from GitHub into the 2i2c workshop hub by clicking the following nbgitpuller link:

- [nbgitpuller](https://strudel.2i2c.cloud/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fstrudel-science%2Fstrudel-kit&urlpath=vscode%2F%3Ffolder%3D%2Fhome%2Fjovyan%2Fstrudel-kit&branch=workshop-hub)

Log into the hub by choosing a username and entering the shared password for the workshop hub (ask your instructor for this password).

> [!NOTE]  
> Sessions on the workshop hub are culled after a 1 hour period of inactivity, and your work is not saved to a persistent storage disk. Please version control and [Push your code to GitHub](#push-your-code-to-github) for any work you would like to save for the future.

Install the dependencies:

```
npm install
```

Start up the app:

```
npm start
```

Follow the port forwarding to [https://strudel.2i2c.cloud/user/<your-username>/proxy/absolute/5175/](https://strudel.2i2c.cloud/user-redirect/proxy/absolute/5175/) to view the app in another browser window.

Begin modifying the templates in `src/pages`.

## Push your code to GitHub

### Create a remote repository

From the [strudel-kit](https://github.com/strudel-science/strudel-kit) GitHub repository, click on the _Use this template_ button to create your own copy of the code in your GitHub account.

Choose a repository name, e.g. `strudel-kit`, and click _Create repository_.

Once the repository is created, make a note of your GitHub remote HTTPS URL by clicking the _Code_ button, e.g. `https://github.com/<your-username>/strudel-kit.git`.

### Add the remote repository in the 2i2c workshop hub

In the 2i2c workshop hub, add the remote repository you have just created with

```bash
git remote add <remote-name> https://github.com/<your-username>/strudel-kit.git
```

Git add any changes to the codebase as normal.

When signing your commits for the first time, you may need to set

```bash
git config --global user.email "<your-email-address>"
git config --global user.name "<your-github-username>"
```

Push your code to the `my-repo` remote repository on GitHub with

```bash
git push <remote-name> <branch-name>
```

When pushing for the first time, this will trigger a device flow. Follow the onscreen instructions to authorize your GitHub account.

## Learn More

STRUDEL Kit is built on top of the Material UI (MUI) component library. [Read more about how to use MUI](https://mui.com/material-ui/getting-started/).

## Contributions

STRUDEL Kit welcomes contributions of all kinds! Learn how to submit suggestions and changes in [CONTRIBUTING.md](CONTRIBUTING.md).

[strudel.science](https://strudel.science)

### Maintaining the workshop hub branch

The `workshop-hub` branch can fall out of sync with the `main` branch over time. Keep the `workshop-hub` branch up to date by periodically merging in changes from the `main` branch.