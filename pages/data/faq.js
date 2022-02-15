module.exports = [
  {
    question: 'Does it run in Deno?',
    answer: '<p>Although the project is written in typescript and in a way it will work in Deno, you still need a Deno version of DOM like Node jsdom package and it is a working in progress to have things running in Deno in near future.</p>'
  },
  {
    question: 'Does it run in Node?',
    answer: `<p>Yes! You can check the <a href="/documentation/getting-started#node">getting started guide for Node</a> for more details.</p>`
  },
  {
    question: 'Is SSR supported?',
    answer: `<p>Not in the way we want yet. You can run CWCO in a Node server and render things but they are still encapsulated inside the component tag you create and need a client side CWCO to handle the tag.</p><p>We are working in a support that exposes the internal content of a component and it is handled in the client in continuation of what was done in the server.</p>`
  },
  {
    question: 'Is there a VSCode tool for HTML and CSS in javascript?',
    answer: '<p>There is one in the works. You can follow <a href="https://github.com/beforesemicolon/cwco#code-editors--ides">this guide</a> for an alternative solution meanwhile.</p>'
  },
  {
    question: 'Can I use CWCO in production?',
    answer: '<p>CWCO is no longer in beta mode and it is actively being supported. We can work with you if you take it into production and something bad happen. We are confident that you will be fine</p>'
  },
  {
    question: 'How fast is CWCO?',
    answer: '<p>There is no official benchmarks numbers to share but the numbers look better than few alternative libraries you can find out there.</p>'
  }
]
