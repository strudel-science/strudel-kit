# Configs

Both the `create-app` and `add-taskflow` commands accept config files so that you can customize the contents of your generated strudel code.

```
strudel create-app my-app --config base-config.json
strudel add-taskflow my-taskflow --template explore-data --config my-taskflow-config.json
```

### `create-app` Config File

Below are the options for the config file you can pass to the `create-app` command. These options are used to build your initial base strudel app.

```js
{
  // Name of the project to use as the directory and package name.
  "name": "my-strudel-app",
  // Title of the project to display in the top app bar.
  "appTitle": "My Science App"
}
```

### `add-taskflow` Config Files

The options for the `add-taskflow` config file are dependent on the task flow template you are using. For example if you use the option `--template explore-data`, then you must use the Explore Data config file. Below are config files for each of the possible task flow templates.

#### Compare Data

```js
{
  // Name of the task flow to use as the directory/module name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "compare-data",
  // Noun that describes what is being compared, i.e. what does each row represent?
  "compareItem": "scenario",
  // Pluralized version of the compareItem value
  "compareItemPlural": "scenarios",
  // Title to display on the main page of the task flow.
  "mainPageTitle": "Compare Data App",
  // Description to display on the main page of the task flow.
  "mainPageDescription": "Description of this app section",
  // Title to display on the New Item page of the task flow.
  "newItemPageTitle": "Compare Data App",
  // Description to display on the New Item page of the task flow.
  "newItemPageDescription": "Description of this app section",
  // Description to display on the Compare page of the task flow.
  "comparePageDescription": "Description of this app section"
}
```

#### Contribute Data

```js
{
  // Name of the task flow to use as the directory/module name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "contribute-data",
  // Title to display on the task flow page.
  "pageTitle": "Contribute Data App",
  // Description to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```

#### Explore Data

```js
{
  // Name of the task flow to use as the directory and package name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "explore-data",
  // Title to display on the task flow page.
  "pageTitle": "Compare Data App",
  // Description to display on the task flow page.
  "pageDescription": "Description of this app section",
  // Name of the data file to use for the main table and filters
  "dataSource": "my_data.json",
  // The property in the dataset that acts as the unique id for each row
  "dataIdField": "id",
  // JSON definitions for configurable page elements
  "definitions": {
    // Definitions for each table
    "columns": {
      // List of columns to display in the main table
      "main": [
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
      ]
    },
    // Definitions for each panel of filters
    "filters": {
      // List of filters to render in the main filters panel
      "main": [
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
}
```

#### Monitor Activities

```js
{
  // Name of the task flow to use as the directory/module name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "monitor-activities",
  // Title to display on the task flow page.
  "pageTitle": "Monitor Activities App",
  // Description to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```

#### Run Computation

```js
{
  // Name of the task flow to use as the directory/module name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "run-computation",
  // Title to display on the task flow page.
  "pageTitle": "Run Computation App",
  // Description to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```

#### Search Data Repositories

```js
{
  // Name of the task flow to use as the directory/module name.
  "name": "my-taskflow",
  // Task flow template to use to generate the components
  "template": "search-data-repositories",
  // Title to display on the task flow page.
  "pageTitle": "Search Data Repositories App",
  // Description to display on the task flow page.
  "pageDescription": "Description of this app section"
}
```