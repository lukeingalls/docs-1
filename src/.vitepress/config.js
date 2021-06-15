const baseConfig = require('@vue/website/config')

module.exports = {
  ...baseConfig,

  lang: 'en-US',
  title: 'Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',

  themeConfig: {
    ...baseConfig.themeConfig,

    nav: [
      {
        text: 'Docs',
        items: [
          {
            items: [
              { text: 'Guide', link: '/guide/introduction' },
              { text: 'API Reference', link: '/api/' },
              { text: 'Examples', link: '/examples/markdown' }
            ]
          },
          {
            items: [
              { text: 'Style Guide', link: '/style-guide/' },
              { text: 'Cookbook', link: '/cookbook/' },
              { text: 'Contribute', link: '/guide/contributing/writing-guide' },
              {
                text: 'Migration from Vue 2',
                link: '/guide/migration/introduction'
              }
            ]
          }
        ]
      },
      {
        text: 'Ecosystem',
        items: [
          {
            items: [
              { text: 'Partners', link: '/community/partners' },
              { text: 'Themes', link: '/community/themes' },
              { text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' }
            ]
          },
          {
            text: 'Official Projects',
            items: [
              { text: 'Vue Router', link: 'https://next.router.vuejs.org/' },
              { text: 'Vuex', link: 'https://next.vuex.vuejs.org/' },
              { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
              {
                text: 'Vue Test Utils',
                link: 'https://next.vue-test-utils.vuejs.org/v2/guide/introduction.html'
              },
              {
                text: 'Devtools',
                link: 'https://github.com/vuejs/vue-devtools'
              }
            ]
          }
        ]
      },
      {
        text: 'Community',
        items: [
          {
            items: [
              { text: 'Team', link: '/community/team' },
              { text: 'Join', link: '/community/join' },
              { text: 'Code of Conduct', link: '/community/coc' }
            ]
          },
          {
            items: [
              { text: 'Twitter', link: 'https://twitter.com/vuejs' },
              { text: 'Chat', link: 'https://discord.com/invite/HBherRA' },
              { text: 'Forum', link: 'https://forum.vuejs.org/' },
              { text: 'Events', link: 'https://events.vuejs.org/' },
              { text: 'DEV Community', link: 'https://dev.to/t/vue' }
            ]
          }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Weekly News', link: 'https://news.vuejs.org/' },
          { text: 'Blog', link: 'https://blog.vuejs.org/' },
          { text: 'RFCs', link: 'https://github.com/vuejs/rfcs' },
          { text: 'Roadmap', link: 'https://github.com/vuejs/vue/projects/6' }
        ]
      },
      {
        text: 'Support Vue',
        link: '/support-vuejs/'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            {
              text: 'Application & Component Instances',
              link: '/guide/instance'
            },
            { text: 'Template Syntax', link: '/guide/template-syntax' },
            {
              text: 'Data Properties and Methods',
              link: '/guide/data-methods'
            },
            {
              text: 'Computed Properties and Watchers',
              link: '/guide/computed'
            },
            {
              text: 'Class and Style Bindings',
              link: '/guide/class-and-style'
            },
            { text: 'Conditional Rendering', link: '/guide/conditional' },
            { text: 'List Rendering', link: '/guide/list' },
            { text: 'Event Handling', link: '/guide/events' },
            { text: 'Form Input Bindings', link: '/guide/forms' },
            { text: 'Components Basics', link: '/guide/component-basics' }
          ]
        },
        {
          text: 'Components In-Depth',
          items: [
            {
              text: 'Component Registration',
              link: '/guide/component-registration'
            },
            { text: 'Props', link: '/guide/component-props' },
            { text: 'Non-Prop Attributes', link: '/guide/component-attrs' },
            { text: 'Custom Events', link: '/guide/component-custom-events' },
            { text: 'Slots', link: '/guide/component-slots' },
            {
              text: 'Provide / inject',
              link: '/guide/component-provide-inject'
            },
            {
              text: 'Dynamic & Async Components',
              link: '/guide/component-dynamic-async'
            },
            { text: 'Template refs', link: '/guide/component-template-refs' },
            {
              text: 'Handling Edge Cases',
              link: '/guide/component-edge-cases'
            }
          ]
        },
        {
          text: 'Transitions & Animation',
          items: [
            { text: 'Overview', link: '/guide/transitions-overview' },
            {
              text: 'Enter & Leave Transitions',
              link: '/guide/transitions-enterleave'
            },
            { text: 'List Transitions', link: '/guide/transitions-list' },
            { text: 'State Transitions', link: '/guide/transitions-state' }
          ]
        },
        {
          text: 'Reusability',
          items: [
            { text: 'Mixins', link: '/guide/mixins' },
            { text: 'Mixins', link: '/guide/custom-directive' }
          ]
        },
        {
          text: 'Composition API',
          items: [
            {
              text: 'Introduction',
              link: '/guide/composition-api-introduction'
            },
            { text: 'Setup', link: '/guide/composition-api-setup' },
            {
              text: 'Lifecycle Hooks',
              link: '/guide/composition-api-lifecycle-hooks'
            },
            {
              text: 'Provide / Inject',
              link: '/guide/composition-api-provide-inject'
            },
            {
              text: 'Template Refs',
              link: '/guide/composition-api-template-refs'
            }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Teleport', link: '/guide/teleport' },
            { text: 'Render Functions', link: '/guide/render-function' },
            { text: 'Plugins', link: '/guide/plugins' }
          ]
        },
        {
          text: 'Digging Deeper',
          items: [
            { text: 'Reactivity in Depth', link: '/guide/reactivity' },
            {
              text: 'Reactivity Fundamentals',
              link: '/guide/reactivity-fundamentals'
            },
            {
              text: 'Reactivity in Computed and Watch',
              link: '/guide/reactivity-computed-watchers'
            },
            {
              text: 'Rendering Mechanisms and Optimizations',
              link: '/guide/optimizations'
            }
          ]
        },
        {
          text: 'Tooling',
          items: [
            {
              text: 'Single File Components',
              link: '/guide/single-file-component'
            },
            { text: 'Testing', link: '/guide/testing' },
            { text: 'TypeScript Support', link: '/guide/typescript-support' },
            { text: 'Mobile', link: '/guide/mobile' },
            {
              text: 'Production Deployment',
              link: '/guide/tooling/deployment'
            }
          ]
        },
        {
          text: 'Scaling Up',
          items: [
            { text: 'Routing', link: '/guide/routing' },
            { text: 'State Management', link: '/guide/state-management' },
            { text: 'Server-Side Rendering', link: '/guide/ssr' }
          ]
        },
        {
          text: 'Accessibility',
          items: [
            { text: 'Basics', link: '/guide/a11y-basics' },
            { text: 'Semantics', link: '/guide/a11y-semantics' },
            { text: 'Standards', link: '/guide/a11y-standards' },
            { text: 'Resources', link: '/guide/a11y-resources' }
          ]
        }
      ]
    }
  }
}
