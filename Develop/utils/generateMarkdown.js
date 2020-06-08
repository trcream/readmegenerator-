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
  return `# Please use the # ${Installation} to install`;
}

function generateUsage(usage) {
  return `# ${usage}`;
}

function generateContributing(contributing) {
  console.log(contributing);
  if (contributing === true) {
    return `When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.
  `;
  } else if (contributing === false) {
    return ``;
  }
}

function generateTests(tests) {
  return `# ${tests}`;
}

function generatePhoto(photo) {
  return ` ![GithubPhoto](${photo})`;
  // return `# ${photo}`;
}

function generateLicense(license) {
  return `# ${license}`;
}

function generateEmail(email) {
  return `#${email}`;
}

module.exports = generateMarkdown;
