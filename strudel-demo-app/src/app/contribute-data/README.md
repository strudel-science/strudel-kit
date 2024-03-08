# Use this Task Flow

Install the STRUDEL CLI tool:

```
pip install strudel-cli
```

Create a base app:

```
strudel create-app my-app
```

Create a config file for your new task flow based on [the contribute-data config example](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/CONFIGS.md#contribute-data):

_my-taskflow-config.json_
```js
{
  "name": "my-taskflow",
  "template": "contribute-data",
  "pageTitle": "Contribute Data App",
  "pageDescription": "Description of this app section"
}
```

Go to the root directory of your new app:

```
cd my-app
```

Add the task flow to your app:

```
strudel add-taskflow --config ../my-taskflow-config.json
```

## Learn More

[Read more about the strudel-cli and learn advanced usage.](https://github.com/strudel-science/strudel-kit/tree/main/strudel-cli)