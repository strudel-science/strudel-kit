# Compare Data Config File

```
{
  "name": "my-taskflow",
  "compareItem": "scenario",
  "compareItemPlural": "scenarios",
  "pages": {
    "list": {
      "pageTitle": "Compare Data App",
      "pageDescription": "Description of this app section"
    },
    "newItem": {
      "pageDescription": "Description of this app section"
    },
    "comparison": {
      "pageDescription": "Description of this app section"
    }
  },
  "data": {
    "list": {
      "table": {
        "dataSource": "default/compare-data/scenarios.json",
        "dataIdField": "id"
      }
    }
  },
  "definitions": {
    "columns": {
      "list": {
        "table": [
          { 
            "field": "name", 
            "headerName": "Scenario Name", 
            "width": 200 
          },
          { 
            "field": "description", 
            "headerName": "Description", 
            "width": 200 
          },
          { 
            "field": "analysis_type", 
            "headerName": "Analysis Type", 
            "width": 200
          },
          { 
            "field": "volumetric_flow_rate", 
            "headerName": "Volumetric Flow Rate", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "tss_concentration", 
            "headerName": "TSS Concentration", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "cod_concentration", 
            "headerName": "COD Concentration", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "tkn_concentration", 
            "headerName": "TKN Concentration", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "acetic_acid_concentration", 
            "headerName": "Acetic Acid Concentration", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "metric6", 
            "headerName": "metric6", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "metric7", 
            "headerName": "metric7", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "metric8", 
            "headerName": "metric8", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "metric9", 
            "headerName": "metric9", 
            "width": 200,
            "isComparisonMetric": true
          },
          { 
            "field": "metric10", 
            "headerName": "metric10", 
            "width": 200,
            "isComparisonMetric": true
          }
        ]
      }
    }
  }
}
```