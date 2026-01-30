# STRUDEL Kit

STRUDEL Kit is a set of modern fullstack templates and components for building scientific apps based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

[Browse the full docs](https://strudel.science/strudel-kit/storybook/)

## Technology Stack
**Backend**
- [**Python**](https://www.python.org/): Programming language popular for scientific and data analysis
- [**FastApi**](https://fastapi.tiangolo:.com/) Backend framework for building REST APIs
- [**SQLAlchemy**](https://www.sqlalchemy:.org/) SQL toolkit and ORM
- [**Alembic**](https://alembic.sqlalchemy:.org/en/latest/) Database migration tool
- [**uv**](https://docs.astral.sh/uv/): Python package and project manager

**Frontend**
- [**TypeScript**](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [**React**](https://react.dev/): A component-based JavaScript library for building UIs.
- [**Vite**](https://vite.dev/): A fast, opinionated frontend build tool.
- [**Material UI**](https://mui.com/material-ui/getting-started/): Open-source React component library based on Google's Material Design.
- [**TanStack Router**](https://tanstack.com/router/latest): A fully type-safe router with built-in data fetching, first-class search-param APIs, and more.
- [**ESLint**](https://eslint.org/): The pluggable linting utility for JavaScript and JSX.
- [**Prettier**](https://prettier.io/): An opinionated code formatter.
- [**Cypress**](https://www.cypress.io/): End-to-end tests for built-in templates.

![Run Computation results page](images/run-computation-results.png)

## Getting started with a template

This library provides a suite of templates to implement UIs for various different task flows common to the scientific domain. Each template lives in the `templates` directory and is built on top of the main `base-app` template.

### Requirements
- [Node](https://nodejs.org/en/download)
- [degit](https://github.com/Rich-Harris/degit)
- [Docker](https://www.docker.com/get-started/)

### Copy a template

Open a terminal and navigate to the directory where you want your app to live.

Copy your template of choice (e.g. `explore-data`):

```
degit strudel-science/strudel-kit/templates/explore-data my-app
```

You can also copy sections of a fullstack template if you don't need the whole backend and frontend:

```
degit strudel-science/strudel-kit/templates/explore-data/frontend my-frontend-app
```

You may even want to combine or add a specific task flow to an existing frontend:

```
degit strudel-science/strudel-kit/templates/explore-data/frontend/src/pages/compare-data my-compare-data-page
```

## Getting started with the React components

[./packages/react-components/README.md](./packages/react-components/README.md)

## Contributions

STRUDEL Kit welcomes contributions of all kinds! Learn how to submit suggestions and changes in [CONTRIBUTING.md](https://github.com/strudel-science/strudel-kit/blob/main/CONTRIBUTING.md).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://codonn.com"><img src="https://avatars.githubusercontent.com/u/1907045?v=4?s=100" width="100px;" alt="Cody O'Donnell"/><br /><sub><b>Cody O'Donnell</b></sub></a><br /><a href="#code-codytodonnell" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License 

This software is licensed through the [Lawrence Berkeley National Lab](https://www.lbl.gov/) and can be used, modified, and shared at absolutely no cost. [Read the full license](https://github.com/strudel-science/strudel-kit/blob/main/LICENSE).

## Attribution

We kindly ask that you take two steps to attribute this repo if you find it useful to your work:

1. Give us a star on our GitHub Page
2. Credit the STRUDEL project and strudel-kit repo in your README.

> This project utilized the [strudel-kit](https://github.com/strudel-science/strudel-kit/tree/main) repository. Read more about [STRUDEL](https://strudel.science).
