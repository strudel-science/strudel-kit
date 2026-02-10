# STRUDEL Frontend

This is the frontend of the STRUDEL Base App. Read on to learn how to get started, modify pages, and modify components.

## Starting the frontend

### Locally

It is recommended to start up a local version of frontend if you are developing changes.

First, make sure you are in the `frontend` directory:

```
cd frontend
```

Next, install the dependencies:

```
npm install
```

Finally, start up the app:

```
npm start
```

Open [http://localhost:5175](http://localhost:5175) to view the app in the browser.

### Using Docker Compose

If you followed the steps in the [main README](../README.md) to start the whole stack with docker, you will also have a frontend running at [http://localhost:5174](http://localhost:5174). This version is only updated after you restart the `frontend` docker stack.

To restart the frontend service, run this at the root of the project:

```
docker compose restart frontend
```

## Pages

Pages, or routes, for the app live in `src/pages`. This app uses Tanstack Router's [file based routing](https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing) system to generate pages.

## Components

There are several local components that live in `src/components`. Many components, however, are pulled from our [shared component library](https://github.com/strudel-science/strudel-kit/tree/main/packages/react-components). If you want to make a change to one of the shared components, you will need to modify the code there and submit a pull request.
