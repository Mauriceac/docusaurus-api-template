import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'My App Docs',
  tagline: 'How can we help you today?',
  favicon: 'img/logo-icon.png',

  // Set the production url of your site here
  url: 'https://docusaurus-api-template.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus-api-template/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mauriceac', // Usually your GitHub org/user name.
  projectName: 'docusaurus-api-template', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mauriceac/docusaurus-api-template',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mauriceac/docusaurus-api-template',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: "Petstore API",
          position: "left",
          to: "/docs/category/petstore-api",
        },
        {to: '/blog', label: 'Release notes', position: 'left'},
        {
          href: 'https://github.com/Mauriceac/docusaurus-api-template',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Contact us',
              to: '/contact-us',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Link 1',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Link 2',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Link 3',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Release notes',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/VasylynaBurger/docusaurus-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          petstore: {
            specPath: "openapi/petstore.yaml",
            outputDir: "docs/petstore",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components

};

export default config;
