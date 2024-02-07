import { FilterConfig } from "./context/ContextProvider";

export const filters: FilterConfig[] = [
  {% for filter in cookiecutter.content.filters %}
    {{ filter }},
  {% endfor %}
];