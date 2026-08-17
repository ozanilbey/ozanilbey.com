// Constants
import { ROOT_URL } from '@source/constants/environment'
import { AUTHOR } from '@source/constants/metadata'

// Data
import pages from '@source/data/pages'
import works from '@source/data/works'

// Helpers
import { getWorkTitle } from '@source/helpers/content'

// Helper: Site > Get site description
function getSiteDescription () {
  const lines = []
  // Title and summary
  lines.push(`# ${AUTHOR.username}`, '', `> ${AUTHOR.description}`, '')
  // Pages (excluding home)
  lines.push('## Pages', '')
  pages
    .filter(page => page.name !== 'home')
    .forEach(page => lines.push(`- [${page.label}](${ROOT_URL}${page.path}/)`))
  lines.push('')
  // Works
  lines.push('## Works', '')
  works.forEach(work => {
    let line = `- [${getWorkTitle(work)}](${ROOT_URL}/works/${work.slug}/)`
    if (work.description) line += `: ${work.description}`
    lines.push(line)
  })
  return lines.join('\n')
}

// Export
export {
  getSiteDescription
}
