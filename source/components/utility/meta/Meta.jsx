// Modules
import PropTypes from 'prop-types'

// Data
import socialAccounts from '@source/data/socialAccounts.json'

// Constants
import { ROOT_URL } from '@source/constants/environment'
import { BRAND, SITE } from '@source/constants/metadata'
import { DEFAULT_LOCALE } from '@source/constants/settings'

// Constants (Local)
const ACCOUNTS = {
  facebook: socialAccounts.find(account => account.id === 'facebook'),
  x: socialAccounts.find(account => account.id === 'x')
}

// Component: Utility > Meta
function Meta ({ article, category, description = SITE.description, keywords = SITE.keywords, page, previewImageURL = BRAND.images.preview.default.url, recommendation, view, willIndex = true }) {
  // Functions
  function getType () {
    if (page === 'profile') return 'profile'
    if (article) return 'article'
    return 'website'
  }
  function getURL () {
    let url = ROOT_URL
    if (page && page !== 'home') url += `/${page}`
    if (view) url += `/${view}`
    return url
  }
  function getTitle () {
    let title = SITE.name
    if (page && page !== 'home') title += `:${page}`
    if (category) title = `${category} | ${title}`
    if (article) title = `${article} | ${title}`
    return title
  }
  function getPreviewImageDescription () {
    let description = 'Preview image'
    if (category) description += ` for category: ${category}`
    if (article) description += ` for article: ${article}`
    return description
  }
  function renderTitle (title) {
    return <title>{title}</title>
  }
  function renderConnections (urls) {
    if (!Array.isArray(urls) || urls.length === 0) return null
    const types = ['preconnect', 'dns-prefetch']
    const normalizedURLs = urls.map(url => url.replace(/^https?:\/\//, '//'))
    return normalizedURLs.map(url =>
      types.map(type =>
        <link
          to={url}
          rel={type}
          key={`${type}-${url}`} />
      )
    )
  }

  // Data
  const url = getURL()
  const title = getTitle()
  const previewImageDescription = getPreviewImageDescription()

  // Render
  return (
    <>
      {/* Title */}
      {renderTitle(title)}
      {willIndex
        ? <>
          {/* URL */}
          <link
            href={url}
            rel="canonical" />
          {/* Connections */}
          {renderConnections(SITE.resources.map(resource => resource.url))}
          {/* Basics */}
          <meta
            name="author"
            content={SITE.author} />
          <meta
            name="description"
            content={description} />
          <meta
            name="keywords"
            content={keywords?.join(', ') || ''} />
          {/* Indexing */}
          <meta
            name="robots"
            content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow" />
          {/* Application */}
          <meta
            content={SITE.name}
            name="application-name" />
          <meta
            name="theme-color"
            content={SITE.color} />
          <meta
            name="color-scheme"
            content={SITE.themes.join(' ')} />
          <meta
            name="supported-color-schemes"
            content={SITE.themes.join(' ')} />
          <meta
            content="yes"
            name="mobile-web-app-capable" />
          {/* The Open Graph Protocol */}
          <meta
            property="og:type"
            content={getType()} />
          <meta
            property="og:locale"
            content={DEFAULT_LOCALE} />
          <meta
            content={url}
            property="og:url" />
          <meta
            content={SITE.name}
            property="og:site_name" />
          <meta
            content={title}
            property="og:title" />
          <meta
            content={description}
            property="og:description" />
          <meta
            property="og:image"
            content={previewImageURL || ''} />
          <meta
            property="og:image:type"
            content={previewImageURL ? `image/${[...previewImageURL.split('.')].slice(-1)[0]}` : ''} />
          <meta
            property="og:image:alt"
            content={previewImageDescription} />
          {recommendation &&
            <meta
              property="og:see_also"
              content={`${ROOT_URL}${recommendation}`} />
          }
          {/* Article information */}
          {article &&
            <meta
              property="article:author"
              content={ACCOUNTS.facebook.url} />
          }
          {article &&
            <meta
              property="article:tag"
              content={keywords?.join(', ') || ''} />
          }
          {/* Hierarchical index */}
          <link
            rel="index"
            href={`${ROOT_URL}/${page}/`} />
          {/* Profile information */}
          {page === 'profile' &&
            <meta
              content="Ozan"
              property="profile:first_name" />
          }
          {page === 'profile' &&
            <meta
              content="Yilmaz"
              property="profile:last_name" />
          }
          {page === 'profile' &&
            <meta
              property="profile:username"
              content={ACCOUNTS.facebook.username} />
          }
          {page === 'profile' &&
            <meta
              content="male"
              property="profile:gender" />
          }
          {/* Facebook Crawler */}
          {page === 'profile' &&
            <meta
              property="fb:profile_id"
              content={ACCOUNTS.facebook.profileIdentifier} />
          }
          <meta
            property="fb:app_id"
            content={ACCOUNTS.facebook.applicationIdentifier} />
          {/* Twitter Cards */}
          <meta
            name="twitter:card"
            content="summary_large_image" />
          <meta
            name="twitter:site"
            content={ACCOUNTS.x.handle} />
          <meta
            name="twitter:creator"
            content={ACCOUNTS.x.handle} />
          <meta
            content={title}
            name="twitter:title" />
          <meta
            content={description}
            name="twitter:description" />
          <meta
            name="twitter:image"
            content={previewImageURL || ''} />
          <meta
            name="twitter:image:alt"
            content={previewImageDescription} />
          {/* Microsoft application */}
          <meta
            content={SITE.color}
            name="msapplication-navbutton-color" />
          <meta
            content={SITE.color}
            name="msapplication-TileColor" />
          <meta
            name="msapplication-TileImage"
            content={BRAND.images.icons.tile.url} />
          {/* Apple mobile web application */}
          <meta
            content="yes"
            name="apple-mobile-web-app-capable" />
          <meta
            content={SITE.name}
            name="apple-mobile-web-app-title" />
          <meta
            content={SITE.color}
            name="apple-mobile-web-app-status-bar-style" />
          <meta
            content={SITE.color}
            name="apple-mobile-web-app-status-bar-style" />
          <link
            rel="apple-touch-icon"
            href={BRAND.images.icons.touch.url} />
          {/* Safari pinned tab icon */}
          <link
            rel="mask-icon"
            color={SITE.color}
            href={BRAND.images.icons.mask.url} />
        </>
        : <>
          {/* Bots */}
          <meta
            name="robots"
            content="noindex, nofollow" />
          <meta
            name="googlebot"
            content="noindex" />
        </>
      }
    </>
  )
}

// Properties
Meta.propTypes = {
  article: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  page: PropTypes.string,
  previewImageURL: PropTypes.string,
  view: PropTypes.string
}

// Export
export default Meta
