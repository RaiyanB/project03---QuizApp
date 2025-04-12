// js/templates.js

function renderTemplate(templateFile, data = {}) {
    fetch(`templates/${templateFile}.handlebars`)
      .then(res => res.text())
      .then(templateSource => {
        const template = Handlebars.compile(templateSource);
        const html = template(data);
        document.getElementById("app").innerHTML = html;
      });
  }