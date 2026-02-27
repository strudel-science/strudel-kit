# STRUDEL Kit

[![All Contributors](https://img.shields.io/github/all-contributors/strudel-science/strudel-kit)](#contributors)

STRUDEL Kit is a set of modern fullstack templates and components for building scientific apps based on the STRUDEL Design System and Task Flows. Visit [strudel.science](https://strudel.science) for more information about the STRUDEL project.

[Browse the new docs!](https://strudel.science/strudel-kit/storybook/)

[(Legacy docs)](https://strudel.science/strudel-kit/docs/)

## Technology Stack
**Backend**
- [**Python**](https://www.python.org/): Programming language popular for scientific and data analysis
- [**FastApi**](https://fastapi.tiangolo.com/): Backend framework for building REST APIs
- [**SQLAlchemy**](https://www.sqlalchemy.org/): SQL toolkit and ORM
- [**Alembic**](https://alembic.sqlalchemy.org/en/latest/): Database migration tool
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
      <td align="center" valign="top" width="14.28%"><a href="https://codonn.com"><img src="https://avatars.githubusercontent.com/u/1907045?v=4?s=100" width="100px;" alt="Cody O'Donnell"/><br /><sub><b>Cody O'Donnell</b></sub></a><br /><a href="#code-codytodonnell" title="Code">💻</a> <a href="#design-codytodonnell" title="Design">🎨</a> <a href="#doc-codytodonnell" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TechMaarten"><img src="https://avatars.githubusercontent.com/u/121214050?v=4?s=100" width="100px;" alt="TechMaarten"/><br /><sub><b>TechMaarten</b></sub></a><br /><a href="#code-TechMaarten" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sspoon"><img src="https://avatars.githubusercontent.com/u/5075865?v=4?s=100" width="100px;" alt="Sarah Poon"/><br /><sub><b>Sarah Poon</b></sub></a><br /><a href="#design-sspoon" title="Design">🎨</a> <a href="#mentoring-sspoon" title="Mentoring">🧑‍🏫</a> <a href="#ideas-sspoon" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://drewpaine.net"><img src="https://avatars.githubusercontent.com/u/254765?v=4?s=100" width="100px;" alt="Drew Paine"/><br /><sub><b>Drew Paine</b></sub></a><br /><a href="#research-pained" title="Research">🔬</a> <a href="#projectManagement-pained" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/LRamakrishnan"><img src="https://avatars.githubusercontent.com/u/2665794?v=4?s=100" width="100px;" alt="LRamakrishnan"/><br /><sub><b>LRamakrishnan</b></sub></a><br /><a href="#mentoring-LRamakrishnan" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-LRamakrishnan" title="Project Management">📆</a> <a href="#fundingFinding-LRamakrishnan" title="Funding Finding">🔍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://georgiabullen.com"><img src="https://avatars.githubusercontent.com/u/941210?v=4?s=100" width="100px;" alt="georgia bullen"/><br /><sub><b>georgia bullen</b></sub></a><br /><a href="#projectManagement-georgiamoon" title="Project Management">📆</a> <a href="#fundingFinding-georgiamoon" title="Funding Finding">🔍</a> <a href="#eventOrganizing-georgiamoon" title="Event Organizing">📋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/oilsinwater"><img src="https://avatars.githubusercontent.com/u/23019793?v=4?s=100" width="100px;" alt="Philliph Drummond"/><br /><sub><b>Philliph Drummond</b></sub></a><br /><a href="#code-oilsinwater" title="Code">💻</a> <a href="#example-oilsinwater" title="Examples">💡</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lea100x"><img src="https://avatars.githubusercontent.com/u/174823027?v=4?s=100" width="100px;" alt="Anh"/><br /><sub><b>Anh</b></sub></a><br /><a href="#eventOrganizing-lea100x" title="Event Organizing">📋</a> <a href="#content-lea100x" title="Content">🖋</a> <a href="#ideas-lea100x" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-lea100x" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://erioldoesdesign.github.io/"><img src="https://avatars.githubusercontent.com/u/11681324?v=4?s=100" width="100px;" alt="Eriol Fox"/><br /><sub><b>Eriol Fox</b></sub></a><br /><a href="#eventOrganizing-Erioldoesdesign" title="Event Organizing">📋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://colliand.com"><img src="https://avatars.githubusercontent.com/u/1879041?v=4?s=100" width="100px;" alt="James Colliander"/><br /><sub><b>James Colliander</b></sub></a><br /><a href="#infra-colliand" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-colliand" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://oieltd.com"><img src="https://avatars.githubusercontent.com/u/1248413?v=4?s=100" width="100px;" alt="Angus Hollands"/><br /><sub><b>Angus Hollands</b></sub></a><br /><a href="#infra-agoose77" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jnywong.github.io"><img src="https://avatars.githubusercontent.com/u/45105935?v=4?s=100" width="100px;" alt="Jenny Wong"/><br /><sub><b>Jenny Wong</b></sub></a><br /><a href="#infra-jnywong" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maryamv"><img src="https://avatars.githubusercontent.com/u/25520845?v=4?s=100" width="100px;" alt="Maryam Vareth"/><br /><sub><b>Maryam Vareth</b></sub></a><br /><a href="#projectManagement-maryamv" title="Project Management">📆</a> <a href="#ideas-maryamv" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Rjdesh"><img src="https://avatars.githubusercontent.com/u/131914510?v=4?s=100" width="100px;" alt="Rajshree Deshmukh"/><br /><sub><b>Rajshree Deshmukh</b></sub></a><br /><a href="#code-Rjdesh" title="Code">💻</a> <a href="#design-Rjdesh" title="Design">🎨</a> <a href="#research-Rjdesh" title="Research">🔬</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jlcohoon"><img src="https://avatars.githubusercontent.com/u/4965832?v=4?s=100" width="100px;" alt="Hannah Cohoon"/><br /><sub><b>Hannah Cohoon</b></sub></a><br /><a href="#research-jlcohoon" title="Research">🔬</a> <a href="#code-jlcohoon" title="Code">💻</a> <a href="#doc-jlcohoon" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://crd.lbl.gov/departments/data-science-and-technology/idf/staff/daniel-gunter/"><img src="https://avatars.githubusercontent.com/u/420923?v=4?s=100" width="100px;" alt="Dan Gunter"/><br /><sub><b>Dan Gunter</b></sub></a><br /><a href="#code-dangunter" title="Code">💻</a> <a href="#mentoring-dangunter" title="Mentoring">🧑‍🏫</a> <a href="#ideas-dangunter" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ErinBecker"><img src="https://avatars.githubusercontent.com/u/19176319?v=4?s=100" width="100px;" alt="Erin Becker"/><br /><sub><b>Erin Becker</b></sub></a><br /><a href="#projectManagement-ErinBecker" title="Project Management">📆</a> <a href="#doc-ErinBecker" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucy-dwr"><img src="https://avatars.githubusercontent.com/u/182827155?v=4?s=100" width="100px;" alt="Lucy Andrews"/><br /><sub><b>Lucy Andrews</b></sub></a><br /><a href="#maintenance-lucy-dwr" title="Maintenance">🚧</a> <a href="#content-lucy-dwr" title="Content">🖋</a> <a href="#design-lucy-dwr" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KirstieJane"><img src="https://avatars.githubusercontent.com/u/3626306?v=4?s=100" width="100px;" alt="Kirstie Whitaker"/><br /><sub><b>Kirstie Whitaker</b></sub></a><br /><a href="#content-kirstiejane" title="Content">🖋</a> <a href="#ideas-kirstiejane" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maryjgoldman"><img src="https://avatars.githubusercontent.com/u/13877333?v=4?s=100" width="100px;" alt="maryjgoldman"/><br /><sub><b>maryjgoldman</b></sub></a><br /><a href="#content-maryjgoldman" title="Content">🖋</a> <a href="#ideas-maryjgoldman" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yacechu"><img src="https://avatars.githubusercontent.com/u/46580542?v=4?s=100" width="100px;" alt="KC"/><br /><sub><b>KC</b></sub></a><br /><a href="#ideas-yacechu" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sufikaur"><img src="https://avatars.githubusercontent.com/u/56102473?v=4?s=100" width="100px;" alt="Sufi Kaur"/><br /><sub><b>Sufi Kaur</b></sub></a><br /><a href="#design-sufikaur" title="Design">🎨</a> <a href="#ideas-sufikaur" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/amyawu"><img src="https://avatars.githubusercontent.com/u/68081958?v=4?s=100" width="100px;" alt="amyawu"/><br /><sub><b>amyawu</b></sub></a><br /><a href="#ideas-amyawu" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yashorri"><img src="https://avatars.githubusercontent.com/u/260739294?v=4?s=100" width="100px;" alt="yashorri"/><br /><sub><b>yashorri</b></sub></a><br /><a href="#ideas-yashorri" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Roadmap
*Current priorities:*
- Review and refine contribution guidelines and governance procedures
- Evaluate processes and tools to ensure sustainable, low‑effort contributions
- Design for AI capabilities in Task Flows (existing and new)
  
*Near future priorities:*
- Consolidate STRUDEL resources in STRUDEL website
- Refine onboarding pathways for different STRUDEL users
  
*Long term priorities:*
- Refine and expand existing guidelines and Task Flows, incorporating new variations and evolving user needs
- Develop a STRUDEL components library to enable more granular, flexible, and reusable UI elements
- Expand the task flow code to include minimal backends to act as templates and reference apps

## License 

This software is licensed through the [Lawrence Berkeley National Lab](https://www.lbl.gov/) and can be used, modified, and shared at absolutely no cost. [Read the full license](https://github.com/strudel-science/strudel-kit/blob/main/LICENSE).

## Attribution

We kindly ask that you take two steps to attribute this repo if you find it useful to your work:

1. Give us a star on our GitHub Page
2. Credit the STRUDEL project and strudel-kit repo in your README.

> This project utilized the [strudel-kit](https://github.com/strudel-science/strudel-kit/tree/main) repository. Read more about [STRUDEL](https://strudel.science).
