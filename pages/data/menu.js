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
    {label: en.menu.documentation.whyCWCO, link: "/documentations/why-cwco", subMenu: []},
    {label: en.menu.documentation.gettingStarted, link: "/documentations/getting-started", subMenu: []},
    {label: en.menu.documentation.creatingComponents, link: "/documentations/creating-components", subMenu: []},
    {label: en.menu.documentation.componentsLifecycles, link: "/documentations/component-lifecycles", subMenu: []},
    {label: en.menu.documentation.attrAndProps, link: "/documentations/attributes-and-properties", subMenu: []},
    {label: en.menu.documentation.template, link: "/documentations/template", subMenu: []},
    {label: en.menu.documentation.directive, link: "/documentations/directive", subMenu: []},
    {label: en.menu.documentation.context, link: "/documentations/context", subMenu: []},
    {label: en.menu.documentation.stylesheet, link: "/documentations/stylesheet", subMenu: []},
    {label: en.menu.documentation.faq, link: "/documentations/faq", subMenu: []},
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