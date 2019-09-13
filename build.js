const fs = require('fs')
const path = require('path')
const projects = require('./content/projects.json')

// Homepage
const indexTemplate = fs.readFileSync(
  path.join(__dirname, 'templates/index.html'), { encoding: 'utf8' }
)

const projectsMarkup = projects
  .map(project => `<li><a href="${project.url}">${project.name}</a></li>`)
  .join('\n')

const index = indexTemplate.replace(/{projects}/, projectsMarkup)

fs.writeFileSync(path.join(__dirname, 'index.html'), index)
