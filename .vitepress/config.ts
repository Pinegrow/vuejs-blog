import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'
import { liveDesigner } from '@pinegrow/vite-plugin'

export default defineConfig({
  title: 'The Vue Point',
  description: 'The offical blog for the Vue.js project',
  cleanUrls: true,
  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'NYHGSGQV',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],
  buildEnd: genFeed,
  vite: {
    plugins: [
      liveDesigner({
        tailwindcss: {
          configPath: '../tailwind.config.js',
          cssPath: './theme/style.css'
        }
        //...
      })
    ]
  }
})
