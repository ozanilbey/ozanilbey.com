// Constants
import { FEATURED_WORKS } from '@source/constants/content'
import { ROOT_URL } from '@source/constants/environment'

// Data
import pages from '@source/data/pages'
import works from '@source/data/works'

// Component: Utility > Sitemap
function Sitemap () {
  // Data
  const time = new Date().toISOString()

  // Functions
  function getURLObjects (data) {
    return data.map(item =>
      <url key={item.path}>
        <loc>{`${ROOT_URL}${item.path}/`}</loc>
        <lastmod>{time}</lastmod>
        <changefreq>{item.frequency}</changefreq>
        <priority>{item.priority}</priority>
      </url>
    )
  }

  // Render
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {getURLObjects([
        ...pages.map(page => ({
          frequency: 'daily',
          path: page.name === 'home' ? '' : `/${page.name}`,
          priority: 1
        })),
        ...works.map(work => ({
          frequency: 'monthly',
          path: `/works/${work.slug}`,
          priority: FEATURED_WORKS.includes(work.slug) ? 0.75 : 0.5
        }))
      ])}
    </urlset>
  )
}

// Export
export default Sitemap
