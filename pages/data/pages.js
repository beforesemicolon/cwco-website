module.exports = {
  "/": {
    title: (locale) => locale.pages.home.title,
    description: (locale) => locale.pages.home.description,
    url: "/",
    CSP: "script-src \"nonce-local\", \"strict-dynamic\" \"unsafe-inline\" https:; object-src \"none\"; base-uri http://localhost:3000/;",
    imageUrl: ""
  },
  "/documentation": {
    title: (locale) => locale.pages.documentation.title,
    description: (locale) => locale.pages.documentation.description,
    url: "/documentation",
    CSP: "script-src \"nonce-local\", \"strict-dynamic\" \"unsafe-inline\" https:; object-src \"none\"; base-uri http://localhost:3000/;",
    imageUrl: ""
  }
}
