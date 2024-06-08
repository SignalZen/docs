// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SignalZen Docs',
  tagline: 'Simple, light and easy for your team productivity',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.signalzen.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SignalZen', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    './docusaurus-plugin-signalzen/src',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'SignalZen',
        logo: {
          alt: 'SignalZen logo',
          src: 'img/signalzen-logo-512x512.png',
          href: 'https://signalzen.com'
        },
        items: [
          {
            href: '/docs/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            href: '/docs/category/live-chat',
            label: 'Live Chat widget',
            position: 'left',
          },
          {
            href: '/docs/category/email',
            label: 'Email',
            position: 'left',
          },
          {
            href: '/docs/category/webhooks',
            label: 'Webhooks',
            position: 'left',
          },
          {
            href: '/docs/category/api',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/SignalZen',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://lt.linkedin.com/company/signalzen-livechat',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/signalzen/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/signalzen',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homepage',
                to: 'https://signalzen.com',
              },
              {
                label: 'Blog',
                to: 'https://signalzen.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SignalZen',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MB "SignalZen"`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
