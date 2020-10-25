// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Content: Meta
function Meta (props) {
  // Methods
  function getType () {
    if (props.page === 'profile') return 'profile'
    if (props.article) return 'article'
    return 'website'
  }
  function getURL () {
    let url = 'https://ozanilbey.com'
    if (props.page && props.page !== 'home') url += `/${props.page}`
    if (props.subpage) url += `/${props.subpage}`
    return url
  }
  function getTitle () {
    let title = 'ozanilbey'
    if (props.page && props.page !== 'home') title += `:${props.page}`
    if (props.category) title = `${props.category} | ${title}`
    if (props.article) title = `${props.article} | ${title}`
    return title
  }
  function getPreviewDescription () {
    let description = 'Preview image'
    if (props.category) description += ` for category: ${props.category}`
    if (props.article) description += ` for article: ${props.article}`
    return description
  }

  // Data
  const url = getURL()
  const title = getTitle()
  const description = props.page === 'error' ? 'Content does not exist.' : props.description
  const keywords = props.keywords.join(', ')
  const previewDescription = getPreviewDescription()

  // Render
  return props.page === 'error'
    ? <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex" />
    </Helmet>
    : <Helmet>
      <title>{title}</title>
      {/* URL */}
      <link rel="canonical" href={url} />
      {/* Default meta data */}
      <meta name="author" content="Ozan İlbey Yılmaz" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Search engines */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      {/* The Open Graph Protocol */}
      <meta property="og:type" content={getType()} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ozanilbey" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={props.preview} />
      <meta property="og:image:type" content={`image/${[...props.preview.split('.')].slice(-1)[0]}`} />
      <meta property="og:image:alt" content={previewDescription} />
      {props.page === 'profile' && <meta property="profile:first_name" content="Ozan İlbey" />}
      {props.page === 'profile' && <meta property="profile:last_name" content="Yılmaz" />}
      {props.page === 'profile' && <meta property="profile:username" content="ozanilbey" />}
      {props.page === 'profile' && <meta property="profile:gender" content="male" />}
      {props.article && <meta property="article:author" content="https://facebook.com/ozanilbey" />}
      {props.article && <meta property="article:tag" content={keywords} />}
      {/* Facebook Crawler */}
      <meta property="fb:app_id" content="380662769053506" />
      {props.page === 'profile' && <meta property="fb:profile_id" content="710116551" />}
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ozanilbey" />
      <meta name="twitter:creator" content="@ozanilbey" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={props.preview} />
      <meta name="twitter:image:alt" content={previewDescription} />
      {/* Microsoft application */}
      <meta name="msapplication-navbutton-color" content="#2dd27d" />
      <meta name="msapplication-TileColor" content="#2dd27d" />
      <meta name="msapplication-TileImage" content="/images/identity/icon-tile.png" />
      {/* Apple mobile web application */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="ozanilbey" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2dd27d" />
      <link rel="apple-touch-icon" href="/images/identity/icon-touch.png" />
      {/* Safari pinned tab icon */}
      <link rel="mask-icon" href="/images/icon.svg" color="#2dd27d" />
    </Helmet>
}

// Properties
Meta.propTypes = {
  article: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  page: PropTypes.string,
  subpage: PropTypes.string,
  preview: PropTypes.string
}
Meta.defaultProps = {
  description: 'Ozan İlbey Yılmaz is a senior designer+developer mainly focused on creating digital products with unique visual identities.',
  keywords: ['Ozan İlbey Yılmaz', 'ozanilbey', 'design', 'designer', 'multidisciplinary designer', 'developer', 'web designer', 'web developer', 'user interface designer', 'UI designer', 'user experience designer', 'UX designer', 'frontend developer', 'piccture', 'cardz', 'favogue', 'semantica'],
  preview: 'https://ozanilbey.com/images/identity/thumbnail.png'
}

// Export
export default Meta
