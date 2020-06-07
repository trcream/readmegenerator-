function generateMarkdown(data) {
  return `
${generateTitle(data.title)} 

${generateDescription(data.description)}

${generateTable(data.table)}

${generateInstallation(data.installation)}

${generateUsage(data.usage)}

${generateLicense(data.license)}

${generateContributing(data.contributing)}

${generateTests(data.tests)}

${generatePhoto(data.photo)}

${generateEmail(data.email)}
`;
}

function generateTitle(title) {
  return `# ${title}`;
}

function generateDescription(description) {
  return `# ${description}`;
}

function generateTable(table) {
  return `# ${table}`;
}

function generateInstallation(Installation) {
  return `# ${Installation}`;
}

function generateUsage(usage) {
  return `# ${usage}`;
}

function generateContributing(contributing) {
  return `# ${contributing}`;
}

function generateTests(tests) {
  return `# ${tests}`;
}

function generatePhoto(photo) {
  return `# ${photo}`;
}

function generateLicense(license) {
  return `# ${license}`;
}

function generateEmail(email) {
  return `#${email}`;
}

module.exports = generateMarkdown;
