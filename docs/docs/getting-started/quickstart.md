---
title: 'Quickstart'
---

Install strudel-cli from PyPi:

```bash
pip install strudel-cli
```

Create a strudel base app:

```bash
strudel create-app my-app
```

This will generate a base web application in a new directory called `my-app`. Go into the new directory:

```bash
cd my-app
```

Install the app dependencies:

```bash
npm install
```

Start up your app locally:

```bash
npm start
```

Open your app in the browser at http://localhost:5173

Add a Task Flow to your app:

```bash
strudel add-taskflow my-taskflow --template compare-data
```

This generates new template files for your Task Flow in `my-app/src/pages/my-taskflow`. Check out the Usage and Configuration page for the template you are using to learn how to customize it.

Navigate to http://localhost:5173/my-taskflow to see your new Task Flow.