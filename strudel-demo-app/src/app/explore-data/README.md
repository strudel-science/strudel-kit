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

Create a config file for your new task flow based on [the explore-data config example](https://github.com/strudel-science/strudel-kit/blob/main/strudel-cli/CONFIGS.md#explore-data):

_my-taskflow-config.json_
```js
{
  "name": "my-taskflow",
  "template": "explore-data",
  "pageTitle": "Compare Data App",
  "pageDescription": "Description of this app section",
  "dataSource": "my_data.json",
  "dataIdField": "id",
  "definitions": {
    "columns": {
      "main": [
        { 
          "field": "first_field", 
          "headerName": "Column One", 
          "width": 200 
        },
        {
          "field": "second_field",
          "headerName": "Column Two",
          "width": 150
        }
      ]
    },
    "filters": {
      "main": [
        {
          "field": "first_field",
          "displayName": "My First Filter",
          "filterType": "CheckboxList",
          "props": {
            "options": [
              {
                "label": "Onions",
                "value": "onions"
              },
              {
                "label": "Peppers",
                "value": "peppers"
              }
            ]
          }
        },
        {
          "field": "second_field",
          "displayName": "My Second Filter",
          "filterType": "Slider",
          "props": {
            "min": 0,
            "max": 100
          }
        }
      ]
    }
  }
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