# Contribute Data Config File

Configuration file to pass to the `add-taskflow` command for the Contribute Data Task Flow. Specifications in the config file can be overriden by options supplied on the command line.

```
strudel add-taskflow -c config.json
```

```
{
  "name": "my-taskflow",
  "template": "contribute-data"
  "pages": {
    "register": {
      "pageTitle": "Register as a data contributor"
    },
    "portal": {
      "pageTitle": "Your Dataset Uploads"
    },
    "upload": {
      "pageTitle": "Upload a new dataset",
      "pageDescription": "Description of this app section"
    },
    "review": {
      "pageTitle": "Review your new dataset"
    }
  },
  "data": {
    "portal": {
      "table": {
        "dataSource": "default/contribute-data/contributor_datasets.json",
        "dataIdField": "id"
      }
    }
  },
  "definitions": {
    "columns": {
      "portal": {
        "table": [
          { 
            "field": "title", 
            "headerName": "Dataset Title", 
            "width": 200 
          },
          { 
            "field": "category", 
            "headerName": "Category", 
            "width": 200 
          },
          { 
            "field": "summary", 
            "headerName": "Summary", 
            "width": 200 
          },
          { 
            "field": "doi", 
            "headerName": "DOI", 
            "width": 200 
          },
          { 
            "field": "publication_date", 
            "headerName": "Created Date", 
            "width": 200 
          },
          { 
            "field": "status", 
            "headerName": "Status", 
            "width": 200 
          }
        ]
      }
    }
  }
}
```

#### `name`

The name of the Task Flow directory to generate.

#### `template`

The name of the Task Flow template to use. Determines which Task Flow config will be compatible and which template files to add to the app. Can be overridden by the `--template` option.

#### `pages.register.pageTitle`

Title to appear at the top of the register page.

#### `pages.portal.pageTitle`

Title to appear at the top of the portal page.

#### `pages.upload.pageTitle`

Title to appear at the top of the upload page.

#### `pages.upload.pageDescription`

Text to appear underneath the title at the top of the upload page.

#### `pages.review.pageTitle`

Title to appear at the top of the review page.

#### `data.portal.table.dataSource`

Source of the data for the initial list of items on the portal page. Value can be a path to a JSON, CSV, or TSV file inside of the `public/data` directory or a URL to an API that returns an array of JSON items.

#### `data.list.table.dataIdField`

Name of the field in the data that represents a unique identifier for each record. For example, `"id"`.

#### `definitions.columns.portal.table`

List of column definition objects for the columns in the table on the portal page. See the [MUI GridColDef docs](https://mui.com/x/api/data-grid/grid-col-def/) for more information about column options.
