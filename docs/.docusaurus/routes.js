import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '630'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '25f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '567'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '784'),
    exact: true
  },
  {
    path: '/home',
    component: ComponentCreator('/home', 'eda'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '52c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a3d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '5ba'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '741'),
            routes: [
              {
                path: '/getting-started/installation',
                component: ComponentCreator('/getting-started/installation', '4f1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/getting-started/usage',
                component: ComponentCreator('/getting-started/usage', 'd53'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/compare-data/config',
                component: ComponentCreator('/task-flows/compare-data/config', '5c6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/compare-data/routes',
                component: ComponentCreator('/task-flows/compare-data/routes', '803'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/contribute-data/config',
                component: ComponentCreator('/task-flows/contribute-data/config', '02a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/contribute-data/routes',
                component: ComponentCreator('/task-flows/contribute-data/routes', 'dc1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/explore-data/config',
                component: ComponentCreator('/task-flows/explore-data/config', '1b7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/explore-data/routes',
                component: ComponentCreator('/task-flows/explore-data/routes', '2c0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/monitor-activities/config',
                component: ComponentCreator('/task-flows/monitor-activities/config', '7ad'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/monitor-activities/routes',
                component: ComponentCreator('/task-flows/monitor-activities/routes', 'e44'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/run-computation/config',
                component: ComponentCreator('/task-flows/run-computation/config', '648'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/run-computation/routes',
                component: ComponentCreator('/task-flows/run-computation/routes', 'f88'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/search-data-repositories/config',
                component: ComponentCreator('/task-flows/search-data-repositories/config', '221'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/task-flows/search-data-repositories/routes',
                component: ComponentCreator('/task-flows/search-data-repositories/routes', '11e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/basic-app-with-strudel/add-taskflow',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/add-taskflow', 'c19'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/continue-learning',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/continue-learning', 'eaf'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/create-app',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/create-app', '8d4'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/customize-app',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/customize-app', '493'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/customize-home-page',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/customize-home-page', 'aa4'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/customize-taskflow',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/customize-taskflow', 'ec4'),
                exact: true
              },
              {
                path: '/tutorials/basic-app-with-strudel/introduction',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/introduction', 'dcd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/basic-app-with-strudel/setup',
                component: ComponentCreator('/tutorials/basic-app-with-strudel/setup', 'ce3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/combine-sections',
                component: ComponentCreator('/tutorials/combine-sections', 'f62'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/tutorials/connect-task-flows-together',
                component: ComponentCreator('/tutorials/connect-task-flows-together', 'd1f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a46'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
