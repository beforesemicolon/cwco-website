const en = require('./i18n/en.json');

module.exports = {
  main: [
    {label: en.menu.main.tryItOut, link: "https://codepen.io/beforesemicolon/pen/eYGMwbz"},
    {label: en.menu.main.docs, link: "/documentation"},
    {label: en.menu.main.examples, link: "https://beforesemicolon.github.io/cwco/?example=create-component.html&theme=neo&file=app.js"},
    {label: en.menu.main.tutorial, link: "https://www.youtube.com/watch?v=yv3BeEssw9E"},
    {label: en.menu.main.blog, link: "https://medium.com/before-semicolon/tagged/cwco"},
  ],
  documentation: [
    {label: en.menu.documentation.whyCWCO, link: "/documentation", subMenu: []},
    {label: en.menu.documentation.gettingStarted, link: "/documentation/getting-started", subMenu: []},
    {label: en.menu.documentation.creatingComponents, link: "/documentation/web-component", subMenu: [
        {label: en.menu.documentation.webComponent, link: "/documentation/web-component"},
        {label: en.menu.documentation.contextProviderComponent, link: "/documentation/context-provider-component"},
        {label: en.menu.documentation.configurations, link: "/documentation/configurations"},
      ]},
    {label: en.menu.documentation.componentsLifecycles, link: "/documentation/on-mount", subMenu: [
        {label: en.menu.documentation.onMount, link: "/documentation/on-mount"},
        {label: en.menu.documentation.onDestroy, link: "/documentation/on-destroy"},
        {label: en.menu.documentation.onUpdate, link: "/documentation/on-update"},
        {label: en.menu.documentation.onAdoption, link: "/documentation/on-adoption"},
        {label: en.menu.documentation.onError, link: "/documentation/on-error"},
      ]},
    {label: en.menu.documentation.attributes, link: "/documentation/attributes", subMenu: []},
    {label: en.menu.documentation.properties, link: "/documentation/properties", subMenu: []},
    {label: en.menu.documentation.template, link: "/documentation/template", subMenu: []},
    {label: en.menu.documentation.directive, link: "/documentation/if-directive", subMenu: [
        {label: en.menu.documentation.ifDirective, link: "/documentation/if-directive"},
        {label: en.menu.documentation.repeatDirective, link: "/documentation/repeat-directive"},
        {label: en.menu.documentation.attrDirective, link: "/documentation/attr-directive"},
        {label: en.menu.documentation.bindDirective, link: "/documentation/bind-directive"},
        {label: en.menu.documentation.refDirective, link: "/documentation/ref-directive"},
      ]},
    {label: en.menu.documentation.customDirective, link: "/documentation/custom-directive", subMenu: []},
    {label: en.menu.documentation.context, link: "/documentation/context", subMenu: []},
    {label: en.menu.documentation.stylesheet, link: "/documentation/stylesheet", subMenu: []},
    {label: en.menu.documentation.events, link: "/documentation/events", subMenu: []},
    {label: en.menu.documentation.faq, link: "/documentation/faq", subMenu: []},
  ],
  footer: {
    learningResources: {
      title: en.menu.learningResources.title,
      items: [
        {label: en.menu.learningResources.essentialTraining, link: "/essential-training"},
        {label: en.menu.learningResources.documentation, link: "/documentation"},
        {label: en.menu.learningResources.usageExamples, link: "/examples"},
        {label: en.menu.learningResources.youtubePlaylist, link: "https://www.youtube.com/playlist?list=PLpWvGP6yhJUjZJEhaULhXJ0NNbH_EOOuj"},
      ]
    },
    about: {
      title: en.menu.about.title,
      items: [
        {label: en.menu.about.openSource, link: "https://github.com/beforesemicolon"},
        {label: en.menu.about.website, link: "https://beforesemicolon.com/"},
        {label: en.menu.about.blog, link: "https://medium.com/before-semicolon"},
        {label: en.menu.about.youtubeChannel, link: "https://www.youtube.com/channel/UCrU33aw1k9BqTIq2yKXrmBw"},
      ]
    },
  }
}
