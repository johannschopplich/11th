import '../sass/main.scss'

// Handle `home` page template-specific content
const template = document.body.dataset.template
if (template === 'home') {
  import('./templates/home.js')
}
