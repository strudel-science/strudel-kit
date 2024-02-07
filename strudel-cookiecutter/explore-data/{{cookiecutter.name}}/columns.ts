import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {% for column in cookiecutter.config.columns %}
    {{ column }},
  {% endfor %}
];