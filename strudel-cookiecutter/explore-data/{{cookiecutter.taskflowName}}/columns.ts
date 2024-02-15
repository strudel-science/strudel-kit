import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {% for column in cookiecutter.content.columns -%}
  {
    {% for key, value in column.items() -%}
      {{ key }}: {{ value }},
    {% endfor -%}
  },
  {% endfor -%}
];