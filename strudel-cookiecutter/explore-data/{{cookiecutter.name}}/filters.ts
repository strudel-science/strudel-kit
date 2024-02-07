import { FilterConfig } from "./context/ContextProvider";

export const filters: FilterConfig[] = [
  {% for filter in cookiecutter.config.filters %}
    {{ filter }}
  {% endfor %}
];