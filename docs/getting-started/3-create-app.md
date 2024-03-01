# Build an App

We will now start to create your first STRUDEL app. In this documentation, we will use the traditional computing nonsense-word "foo" for the name of app, but please feel free to choose a name more to your own liking. The `strudel` command has several sub-commands to do different tasks; to create an app named *planets-app* use the `create-app` sub-command like this:

```
strudel create-app planets-app
```

This will generate some output and prompt you for some values, with default values supplied in parentheses. The first option has the `planets-app` value we passed via the command line, so just click Enter to accept. The second option asks for an `appTitle`. Give your app a custom title by typing `"Planets"` then clicking Enter. The command should give the message `Successfully created your strudel app!` and provide some additional hints on next steps (which we will not show here).

At this point you will have a directory named for your app that is ready to run. Now you will change to that directory and use the Node Package Manager that you installed earlier to install the dependencies needed by your app.

```
cd planets-app
npm install
```

 This will produce a fair amount of output as the NPM tool fetches and installs all the JavaScript dependencies that STRUDEL uses. It will print out some warnings about deprecated packages and security vulnerabilities. This is normal. For a real-world deployment, you would need to look at these warnings and vulnerabilities more closely, but you can safely ignore them for now.

Assuming you didn't get any errors in the  step above, you can now run your app from the same directory:

```
npm start
```

This will generate some more warnings and informational messages on the console, but should eventually cause your browser to open a new page with a simple welcome banner. If your browser does not open automatically, you can manually go to [http://localhost:3000/](http://localhost:3000/) to connect to the app.

In the future, when you run your app, you will not need to perform the install step -- just `npm start`. In fact, the development server that this runs is able to update the app "live" as you change the code in this directory, so you don't need to stop and restart the app for each change.

Next we will learn how to do something a bit more useful with the app by adding your first task flow.

Previous           |  Next
:-------------------------:|:-------------------------:
[Set Up Your Development Environment](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/2-setup.md)  |  [Add a Task Flow](https://github.com/strudel-science/strudel-kit/blob/main/docs/getting-started/4-add-taskflow.md)