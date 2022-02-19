const en = require('./i18n/en.json');

module.exports = {
  main: [
    {label: en.menu.main.tryItOut, link: "https://stackblitz.com/edit/web-platform-ezn1mb?file=script.js"},
    {label: en.menu.main.docs, path: "/documentation"},
    {label: en.menu.main.examples, link: "https://beforesemicolon.github.io/cwco/?example=create-component.html&theme=neo&file=app.js"},
    {label: en.menu.main.tutorial, link: "https://www.youtube.com/watch?v=yv3BeEssw9E"},
    {label: en.menu.main.blog, link: "https://medium.com/before-semicolon/tagged/cwco"},
  ],
  documentation: [
    {label: en.menu.documentation.whyCWCO, path: "/documentation", subMenu: []},
    {label: en.menu.documentation.gettingStarted, path: "/documentation/getting-started", subMenu: []},
    {label: en.menu.documentation.creatingComponents, path: "/documentation/web-component", subMenu: [
        {label: en.menu.documentation.webComponent, path: "/documentation/web-component"},
        {label: en.menu.documentation.contextProviderComponent, path: "/documentation/context-provider-component"},
        {label: en.menu.documentation.configurations, path: "/documentation/configurations"},
      ]},
    {label: en.menu.documentation.componentsLifecycles, path: "/documentation/on-mount", subMenu: [
        {label: en.menu.documentation.onMount, path: "/documentation/on-mount"},
        {label: en.menu.documentation.onDestroy, path: "/documentation/on-destroy"},
        {label: en.menu.documentation.onUpdate, path: "/documentation/on-update"},
        {label: en.menu.documentation.onAdoption, path: "/documentation/on-adoption"},
        {label: en.menu.documentation.onError, path: "/documentation/on-error"},
      ]},
    {label: en.menu.documentation.attributes, path: "/documentation/attributes", subMenu: []},
    {label: en.menu.documentation.properties, path: "/documentation/properties", subMenu: []},
    {label: en.menu.documentation.template, path: "/documentation/template", subMenu: []},
    {label: en.menu.documentation.directive, path: "/documentation/if-directive", subMenu: [
        {label: en.menu.documentation.ifDirective, path: "/documentation/if-directive"},
        {label: en.menu.documentation.repeatDirective, path: "/documentation/repeat-directive"},
        {label: en.menu.documentation.attrDirective, path: "/documentation/attr-directive"},
        {label: en.menu.documentation.bindDirective, path: "/documentation/bind-directive"},
        {label: en.menu.documentation.refDirective, path: "/documentation/ref-directive"},
      ]},
    {label: en.menu.documentation.customDirective, path: "/documentation/custom-directive", subMenu: []},
    {label: en.menu.documentation.context, path: "/documentation/context", subMenu: []},
    {label: en.menu.documentation.stylesheet, path: "/documentation/stylesheet", subMenu: []},
    {label: en.menu.documentation.events, path: "/documentation/events", subMenu: []},
    {label: en.menu.documentation.faq, path: "/documentation/faq", subMenu: []},
  ],
  footer: {
    learningResources: {
      title: en.menu.learningResources.title,
      items: [
        // {label: en.menu.learningResources.essentialTraining, path: "/essential-training"},
        {label: en.menu.learningResources.documentation, path: "/documentation"},
        {label: en.menu.learningResources.usageExamples, path: "/examples"},
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
