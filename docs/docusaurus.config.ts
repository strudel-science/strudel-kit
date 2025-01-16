import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const options: any = {
  // pass in a single string or an array of strings
  src: ["../strudel-demo-app/src/components/**/*.tsx"],
  // parserOptions: {
  //   // pass parserOptions to react-docgen-typescript
  //   // here is a good starting point which filters out all
  //   // types from react
  //   propFilter: (prop, component) => {
  //     if (prop.parent) {
  //       return !prop.parent.fileName.includes('@types/react');
  //     }

  //     return true;
  //   },
  // },
};

const config: Config = {
  title: "STRUDEL Kit",
  tagline: "Create user-centered software for scientific communities",
  favicon: "img/favicon.png",
  url: "https://strudel.science",
  baseUrl: "/strudel-kit/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/strudel-science/strudel-kit/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/strudel-logo-header.png",
    colorMode: {
      defaultMode: "dark",
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "STRUDEL Kit",
      logo: {
        alt: "My Site Logo",
        src: "img/strudel-logo-icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/strudel-science/strudel-kit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "STRUDEL Logo",
        src: "img/strudel-logo-header.png",
        href: "https://strudel.science",
        height: 75,
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
            {
              label: "Guides",
              to: "/guides/combine-sections",
            },
            {
              label: "Task Flows",
              to: "/task-flows/overview",
            },
            {
              label: "Components",
              to: "/components/overview",
            },
            {
              label: "CLI",
              to: "/cli/reference",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/orgs/strudel-science/discussions/",
            },
            {
              label: "Join our mailing list",
              href: "mailto:strudel-community+subscribe@lbl.gov",
            },
            {
              label: "Email us",
              href: "mailto:strudel@lbl.gov",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Events",
              href: "https://strudel.science/engage/events/",
            },
            {
              label: "Task Flow Designs",
              href: "https://strudel.science/design-system/task-flows/overview/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Regents of the University of California, through Lawrence Berkeley National Laboratory.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "top",
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "CFT2374PW2",
      // Public API key: it is safe to commit it
      apiKey: "4a6cd559ed850d61bbe5d942926e97f7",
      indexName: "strudel",
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    "@saucelabs/theme-github-codeblock",
    "@docusaurus/theme-live-codeblock",
  ],
  plugins: [["docusaurus-plugin-react-docgen-typescript", options]],
};

export default config;
