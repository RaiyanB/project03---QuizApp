// js/templates.js

function renderTemplate(templateFile, data = {}) {
  fetch(`templates/${templateFile}.handlebars`)
    .then((response) => response.text())
    .then((templateSource) => {
      const template = Handlebars.compile(templateSource);
      document.getElementById("app").innerHTML = template(data);
    })
    .catch((error) => console.error("Error loading template:", error));
}
