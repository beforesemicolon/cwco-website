const path = require("path");
const fs = require("fs");

const createPage = (url, {localeKey, template, imageUrl = ""} = {}) => {
  return {
    title: (locale) => locale.pages[localeKey].title,
    description: (locale) => locale.pages[localeKey].description,
    url,
    CSP: "script-src \"nonce-local\", \"strict-dynamic\" \"unsafe-inline\" https:; object-src \"none\"; base-uri http://localhost:3000/;",
    imageUrl,
    content: (locale) => {
      return template
        ? fs.readFileSync(
          path.resolve(__dirname, `./documentations/${locale}/${template}.html`),
          'utf-8'
        )
        : '';
    }
  };
}

module.exports = {
  "/": createPage("/", {localeKey: "home"}),
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
  "/documentation/directive": createPage("/documentation/directive", {localeKey: "directive", template: "directive"}),
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