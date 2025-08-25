---
title: 'Installation'
---

## Prerequisites

STRUDEL Kit requires Node.js with npm to run the web applications you build. If you don't already have these tools on your system, use the link below to install them:

- [Node.js 18+ with npm and npx](https://nodejs.org/en/download)

**Mac and Linux Users**: It is recommended to use nvm to install node, npm, and npx.

**Windows Users**: You have two recommended options for installing node and npm. If you use Powershell, the recommended way is to install using fnm. If you do not use Powershell, the recommended way is to download and run the Windows Installer from the nodejs download page. After running the installer, you will need to either completely reboot your terminal application or run `SET PATH=C:\Program Files\nodejs;%PATH%` in order to use the node and npm commands on the command line.

## Option 1 (recommended): Clone strudel-kit with degit

```
npx degit strudel-science/strudel-kit my-app
```

This will clone the whole strudel-kit repository into a directory called `my-app`. By using `degit` instead of `git clone` you get all the files without any of the git history from the main strudel-kit repository. Note that you will have to connect this to your own remote repository.

## Option 2: Use the strudel-kit template on GitHub

Navigate to the [strudel-kit repository GitHub page](https://github.com/strudel-science/strudel-kit/tree/main), click the green "Use this template" button, then click "Create a new repository." Follow the instructions on the screen to create a new repository on GitHub. This will create a brand new repository that contains all of the files in strudel-kit but does not include any of the git history.

## Option 3: Fork strudel-kit on GitHub

This option makes the most sense for people that want to contribute work back into the main strudel-kit repository. Navigate to the [strudel-kit repository GitHub page](https://github.com/strudel-science/strudel-kit/tree/main), then click the grey "Fork" button. Follow the instructions on the screen to create your own fork of strudel-kit.
