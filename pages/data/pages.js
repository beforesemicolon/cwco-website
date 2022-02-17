const path = require("path");
const fs = require("fs");

const createPage = (urlPath, {localeKey, template, imageUrl = ""} = {}) => {
  return {
    title: (locale) => locale.pages[localeKey].title,
    description: (locale) => locale.pages[localeKey].description,
    path: urlPath,
    CSP: "script-src \"nonce-local\", \"strict-dynamic\" \"unsafe-inline\" https:; object-src \"none\"; base-uri http://localhost:3000/;",
    imageUrl,
    content: (locale) => {
      return template
        ? fs.readFileSync(
          path.resolve(__dirname, `../partials/documentations/${locale}/_${template}.html`),
          'utf-8'
        )
        : '';
    }
  };
}

module.exports = {
  "/": createPage("/", {localeKey: "home"}),
  "/404": createPage("/404", {localeKey: "notFound"}),
  "/documentation": createPage("/documentation", {localeKey: "documentation", template: "why-cwco"}),
  "/documentation/getting-started": createPage("/documentation/getting-started", {
    localeKey: "gettingStarted",
    template: "getting-started"
  }),
  "/documentation/web-component": createPage("/documentation/web-component", {
    localeKey: "webComponent",
    template: "web-component"
  }),
  "/documentation/context-provider-component": createPage("/documentation/context-provider-component", {
    localeKey: "contextProviderComponent",
    template: "context-provider-component"
  }),
  "/documentation/configurations": createPage("/documentation/configurations", {
    localeKey: "configurations",
    template: "configurations"
  }),
  "/documentation/on-mount": createPage("/documentation/on-mount", {localeKey: "onMount", template: "on-mount"}),
  "/documentation/on-destroy": createPage("/documentation/on-destroy", {
    localeKey: "onDestroy",
    template: "on-destroy"
  }),
  "/documentation/on-update": createPage("/documentation/on-update", {localeKey: "onUpdate", template: "on-update"}),
  "/documentation/on-adoption": createPage("/documentation/on-adoption", {
    localeKey: "onAdoption",
    template: "on-adoption"
  }),
  "/documentation/on-error": createPage("/documentation/on-error", {localeKey: "onError", template: "on-error"}),
  "/documentation/attributes": createPage("/documentation/attributes", {
    localeKey: "attributes",
    template: "attributes"
  }),
  "/documentation/properties": createPage("/documentation/properties", {
    localeKey: "properties",
    template: "properties"
  }),
  "/documentation/template": createPage("/documentation/template", {localeKey: "template", template: "template"}),
  "/documentation/if-directive": createPage("/documentation/if-directive", {localeKey: "ifDirective", template: "if-directive"}),
  "/documentation/repeat-directive": createPage("/documentation/repeat-directive", {localeKey: "repeatDirective", template: "repeat-directive"}),
  "/documentation/attr-directive": createPage("/documentation/attr-directive", {localeKey: "attrDirective", template: "attr-directive"}),
  "/documentation/bind-directive": createPage("/documentation/bind-directive", {localeKey: "bindDirective", template: "bind-directive"}),
  "/documentation/ref-directive": createPage("/documentation/ref-directive", {localeKey: "refDirective", template: "ref-directive"}),
  "/documentation/custom-directive": createPage("/documentation/custom-directive", {
    localeKey: "customDirective",
    template: "custom-directive"
  }),
  "/documentation/context": createPage("/documentation/context", {localeKey: "context", template: "context"}),
  "/documentation/stylesheet": createPage("/documentation/stylesheet", {
    localeKey: "stylesheet",
    template: "stylesheet"
  }),
  "/documentation/events": createPage("/documentation/events", {localeKey: "events", template: "events"}),
  "/documentation/faq": createPage("/documentation/faq", {localeKey: "faq", template: "faq"}),
}
