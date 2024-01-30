import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'ScrDocs',
  favicon: 'favicon.ico',
  url: 'https://scrkit.com/',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
    localeConfigs: {
      "zh-Hans": { label: "简体中文" },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
		    routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      ({
		indexBlog: false,
		docsRouteBasePath: "/",
        hashed: false,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'SiteLogo',
          src: 'favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mihoyo',
            position: 'left',
            label: 'miHoYo',
          },
          {href: 'https://scrkit.com', label: '购买', position: 'right'},
          {href: 'https://scrkit.com/qqgroup',label: '售后', position: 'right'},
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
