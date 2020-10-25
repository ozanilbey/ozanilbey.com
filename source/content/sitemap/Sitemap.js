// Modules
import React from 'react'

// Constants
import { ROOT_URL } from '~/constants/settings'
import { PAGE_OPTIONS } from '~/constants/options'
import { FEATURED_WORKS } from '~/constants/content'

// Data
import works from '~/data/works'

// Content: Sitemap
function Sitemap (props) {
  // Data
  const time = new Date().toISOString()

  // Methods
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
        ...PAGE_OPTIONS.map(page => ({
          path: page === 'home' ? '' : `/${page}`,
          frequency: 'daily',
          priority: 1
        })),
        ...works.map(work => ({
          path: `/works/${work.slug}`,
          frequency: 'monthly',
          priority: FEATURED_WORKS.includes(work.slug) ? 0.75 : 0.5
        }))
      ])}
    </urlset>
  )
}

// Export
export default Sitemap
