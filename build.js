const ejs = require('ejs');
const fs = require('fs');

const layout = fs.readFileSync('layout.ejs', 'utf-8').toString();
let people = `
  <h1>Does EJS work here?<h1>
  <p>Only if you and I exist on this page... so hooray!<p>
`;

const html = ejs.render(layout,  {people: people});
fs.writeFileSync("dist/index.html", html);
