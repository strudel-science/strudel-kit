# Use this Task Flow

Install the STRUDEL CLI tool:

```
pip install -i https://test.pypi.org/simple/ strudel-cli
```
:warning: _strudel-cli is only on TestPyPI right now. When it is published to PyPI, you won't need the -i option._

Create a base app:

```
strudel create-app my-app
```

Create a config file for your new task flow based on [the run-computation config example](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/CONFIGS.md#run-computation):

_my-taskflow-config.json_
```js
{
  "name": "my-taskflow",
  "template": "run-computation",
  "pageTitle": "Run Computation App",
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