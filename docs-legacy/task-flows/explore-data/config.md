# Explore Data Config File

Configuration file to pass to the `add-taskflow` command for the Explore Data Task Flow. Specifications in the config file can be overriden by options supplied on the command line.

```
strudel add-taskflow -c config.json
```

```
{
  "name": "my-data-explorer",
  "template": "explore-data"
  "pages": {
    "main": {
      "pageTitle": "Explore Data App",
      "pageDescription": "Description of this app section"
    }
  },
  "data": {
    "main": {
      "table": {
        "dataSource": "default/explore-data/genomes.tsv",
        "dataIdField": "Proteome_ID"
      }
    }
  },
  "definitions": {
    "columns": {
      "main": {
        "table": [
          {
            "field":"Organism",
            "headerName":"Organism",
            "width":200
          },
          {
            "field":"Common Name",
            "headerName":"Common Name",
            "width":200
          },
          {
            "field":"Assembly",
            "headerName":"Assembly",
            "width":150
          },
          {
            "field":"Data Usage Policy",
            "headerName":"Data Usage Policy",
            "width":220
          },
          {
            "field":"Euk. BUSCO %",
            "headerName":"Euk. BUSCO %",
            "type":"number",
            "width":200
          },
          {
            "field":"Emb. BUSCO %",
            "headerName":"Emb. BUSCO %",
            "type":"number",
            "width":200
          }
        ]
      }
    },
    "filters": {
      "main": [
        {
          "field": "Assembly",
          "displayName":"Assembly",
          "filterType":"CheckboxList",
          "props":{
            "options":[
              {
                "label":"JGI",
                "value":"JGI"
              },
              {
                "label":"BYU",
                "value":"BYU"
              },
              {
                "label":"AGP",
                "value":"AGP"
              }
            ]
          }
        },
        {
          "field":"Data Usage Policy",
          "displayName":"Data Usage Policy",
          "filterType":"CheckboxList",
          "props":{
            "options":[
              {
                "label":"restricted",
                "value":"restricted"
              },
              {
                "label":"unrestricted",
                "value":"unrestricted"
              }
            ]
          }
        },
        {
          "field":"Euk. BUSCO %",
          "displayName":"Euk. BUSCO %",
          "filterType":"Slider",
          "props":{
            "min":0,
            "max":100
          }
        },
        {
          "field":"Emb. BUSCO %",
          "displayName":"Emb. BUSCO %",
          "filterType":"Slider",
          "props":{
            "min":0,
            "max":100
          }
        }
      ]
    }
  }
}
```

#### `name`

The name of the Task Flow directory to generate.

#### `template`

The name of the Task Flow template to use. Determines which Task Flow config will be compatible and which template files to add to the app. Can be overridden by the `--template` option.

#### `pages.main.pageTitle`

Title to appear at the top of the main page.

#### `pages.main.pageDescription`

Text to appear underneath the title at the top of the main page.

#### `data.main.table.dataSource`

Source of the data for the initial list of items on the main page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.main.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record. For example, `"id"`.

#### `definitions.columns.main.table`

List of column definition objects for the columns in the table on the main page. See the [MUI GridColDef docs](https://mui.com/x/api/data-grid/grid-col-def/) for more information about column options.

#### `definitions.filters.main`

List of filters to display on the main page and use to filter the main table data. Each filter has a definition object to determine how it renders and functions.

#### `definitions.filters.main.field`

Exact name of the property field in the data to filter on. 

#### `definitions.filters.main.displayName`

Text to display in the label for the filter.

#### `definitions.filters.main.filterType`

The kind of filter component and function to use. Must be `"CheckboxList"` or `"Slider"`. More filter types will be supported in the future.

#### `definitions.filters.main.props`

Extra options to pass to the filter based on the filter type.
