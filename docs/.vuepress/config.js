const {path} = require('@vuepress/utils');
const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Lagoon Plugin Documentation',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Poppins:700|Source+Sans+Pro&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-lando-docs',
  themeConfig: {
    logo: '/images/logo-pink-small.png',
    repo: 'lando/lagoon',
    docsDir: 'docs',
    docsBranch: 'main',
    sponsors: yaml.load(fs.readFileSync(path.resolve(__dirname, 'public') + '/api/sponsors.yml', 'utf8')),
    // showSponsors: ['platformsh'],
    showCarbonAds: true,
    showSponsors: true,
    navbar: [
      {text: 'Getting Started', link: 'https://docs.lando.dev/basics/'},
    ],
  },
};
