import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Sam's Portfolio",
  tagline: "Machine Learning Engineer & Software Developer",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ash3327.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/personalblog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ash3327', // Usually your GitHub org/user name.
  projectName: 'personalblog', // Usually your repo name.

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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs/base',
          path: 'docs/base',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog_old',
        routeBasePath: 'blog_old',
        path: './blog_old',

        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algo',
        path: 'docs/algo',
        routeBasePath: 'docs/algo',
        sidebarPath: './sidebars.ts',
        
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'docs/ai',
        routeBasePath: 'docs/ai',
        sidebarPath: './sidebars.ts',
        
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interests',
        path: 'docs/interests',
        routeBasePath: 'docs/interests',
        sidebarPath: './sidebars.ts',
        
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SamKHT',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {to: '/life-in-weeks', label: 'Life in Weeks 生命倒計時', position: 'left'},
        {to: '/blog', label: 'Blog 博客', position: 'left'},
        // {to: '/blog_old', label: 'Tech Blog 技術博客', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Prog 編程',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'algo',
          position: 'left',
          label: 'Algo 算法',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'ai',
          position: 'left',
          label: 'AI 人工智能',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          docsPluginId: 'interests',
          position: 'left',
          label: 'Interests 興趣',
        },
        {
          href: 'https://github.com/ash3327',
          position: 'right',
          className: 'fa-github fa-brands fa-xl',
          "aria-label": "GitHub",
          // label: 'GitHub'
        },
        {
          href: 'https://linkedin.com/in/khtam-51a008256',
          position: 'right',
          className: 'fa-linkedin fa-brands fa-xl',
          "aria-label": "LinkedIn"
          // label: 'LinkedIn'
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Contacts',
      //     items: [
      //       {
      //         label: 'samkht3327.work@gmail.com',
      //         href: 'mailto:samkht3327.work@gmail.com',
      //       }
      //     ],
      //   },
      //   // {
      //   //   title: 'Community',
      //   //   items: [
      //   //     {
      //   //       label: 'Stack Overflow',
      //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Discord',
      //   //       href: 'https://discordapp.com/invite/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'X',
      //   //       href: 'https://x.com/docusaurus',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'Follow Me',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/ash3327',
      //       },
      //       {
      //         label: 'LinkedIn',
      //         href: 'https://www.linkedin.com/in/khtam-51a008256/',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Sam K. H. Tam. Built with Docusaurus and assistance of Cursor with Claude.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ]
};

export default config;
