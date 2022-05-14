module.exports = {
  title: "Reol",
  description: "Reol的练习笔记",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'Reol' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明, Reol' }]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'VUE2', items: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
          ] },
          { text: 'VUE3', items: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
          ] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}