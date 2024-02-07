# Configs

Both the `create-app` and `add-taskflow` commands accept config files so that you can customize the contents of your generated strudel code.

### `create-app` Config File

Below are the options for the config file you can pass to the `create-app` command. These options are used to build your initial base strudel app.

```js
{
  // Name of the project to use as the directory and package name.
  "projectName": "my-strudel-app",
  "content": {
    // Title of the project to display in the top app bar.
    "projectTitle": "My Science App"
  }
}
```

### `add-taskflow` Config Files

The options for the `add-taskflow` config file are dependent on the task flow template you are using. For example if you use the option `--template explore-data`, then you must use the Explore Data config file. Below are config files for each of the possible task flow templates.

#### Compare Data

```js
{
  // Title of the project to display in the top app bar.
  "projectName": "My Project",
  // Title of the task flow to display in navigation.
  "taskflowName": "My Compare Data Flow",
  // Title to display on the task flow page.
  "pageTitle": "Compare Data App",
  // Title to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```

#### Contribute Data

```js
{
  // Name of the task flow to use as the directory name.
  "taskflowName": "my-taskflow",
  "content": {
    // Title to display on the task flow page.
    "pageTitle": "Compare Data App",
    // Description to display on the task flow page.
    "pageDescription": "Description of this app section"
  }
}
```

#### Explore Data

```js
{
  // Name of the task flow to use as the directory and package name.
  "taskflowName": "my-taskflow",
  "content": {
    // Title to display on the task flow page.
    "pageTitle": "Compare Data App",
    // Description to display on the task flow page.
    "pageDescription": "Description of this app section",
    // List of columns to display in the table
    "columns": [
      { 
        // Property name for this column in the data
        "field": "first_field", 
        // Name to display in the column header
        "headerName": "Column One", 
        // Width of the column
        "width": 200 
      },
      {
        "field": "second_field",
        "headerName": "Column Two",
        "width": 150
      }
    ],
    // List of filters to render in the filters panel
    "filters": [
      {
        // Property name for this field in the data
        "field": "first_field",
        // Name display in the filter label
        "displayName": "My First Filter",
        // Type of filter component to use
        // Options: "CheckboxList", "Slider"
        "filterType": "CheckboxList",
        // Extra options to pass to the filter
        // These props are dependent on the filterType chosen
        "props": {
          // List of options to render as checkboxes
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
          // Minimum value of the slider
          "min": 0,
          // Maximum value of the slider
          "max": 100
        }
      }
    ]
  }
}
```

#### Monitor Activities

```js
{
  // Name of the task flow to use as the directory and package name.
  "taskflowName": "my-taskflow",
  "content": {
    // Title to display on the task flow page.
    "pageTitle": "Compare Data App",
    // Description to display on the task flow page.
    "pageDescription": "Description of this app section"
  }
}
```

#### Run Computation

```js
{
  // Name of the task flow to use as the directory and package name.
  "taskflowName": "my-taskflow",
  "content": {
    // Title to display on the task flow page.
    "pageTitle": "Compare Data App",
    // Description to display on the task flow page.
    "pageDescription": "Description of this app section"
  }
}
```

#### Search Data Repositories

```js
{
  // Name of the task flow to use as the directory and package name.
  "taskflowName": "my-taskflow",
  "content": {
    // Title to display on the task flow page.
    "pageTitle": "Compare Data App",
    // Description to display on the task flow page.
    "pageDescription": "Description of this app section"
  }
}
```