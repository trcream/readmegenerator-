function generateMarkdown(data) {
  const fileContent = "";
  if (data.title) fileContent += generateTitle(data.title);
  return;
}

function generateTitle(title) {
  return `# ${data.title}`;
}

function generateDescription(title) {}

module.exports = generateMarkdown;
