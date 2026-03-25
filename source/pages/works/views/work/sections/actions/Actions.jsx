// Modules
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '@source/components/interface/icon/Icon'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Hooks
import useDimensions from '@source/hooks/useDimensions'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'
import { getWorkTitle } from '@source/helpers/content'
import { calculateColorExtremity } from '@source/helpers/system'

// Utilities
import { rgbColor } from '@source/utilities/format'

// Data
import sharingOptions from '@source/data/sharingOptions'
import socialAccounts from '@source/data/socialAccounts.json'

// Styles
import './Actions.scss'

// Constants (Local)
const FACEBOOK_ACCOUNT_DATA = socialAccounts.find(account => account.id === 'facebook')

// Section: Works > Work > Actions (Footer)
function Actions ({ category, className, label, recommendation, style, ...rest }) {
  // State
  const [url, setUrl] = useState('')

  // Data
  const { isMobile } = useDimensions()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Effects
  useEffect(() => {
    setUrl(window.encodeURIComponent(window.location.href))
  }, [])

  // Render
  return (
    <Page.Footer
      name="actions"
      {...attributes}
      className={className}
      style={style}>
      <ul className="options">
        <li className="sharing option">
          <strong className="title">Share project</strong>
          <ul className="items">
            {sharingOptions
              .filter(option => isMobile || option.id !== 'messenger')
              .map(option =>
                <li
                  key={option.id}
                  className="item">
                  <Link
                    isExternal
                    className="link"
                    href={
                      option.link
                        .replace('LINK', url)
                        .replace('MESSAGE', label)
                        .replace('FACEBOOK_APPLICATION_IDENTIFIER', FACEBOOK_ACCOUNT_DATA.applicationIdentifier)
                      }>
                    <Icon
                      name={option.id}
                      className={getClassName('icon', { [option.id]: true, monocolor: !!calculateColorExtremity(option.color) })}
                      style={{ color: rgbColor(option.color) }} />
                  </Link>
                </li>
              )
            }
          </ul>
        </li>
        {recommendation &&
          <li className="navigation option">
            <strong className="title">Next in "{category.label}" category</strong>
            <div className="content">
              <Link
                arrow="right"
                className="link"
                to={`/works/${recommendation.slug}`}>
                {getWorkTitle(recommendation)}
              </Link>
            </div>
          </li>
        }
      </ul>
    </Page.Footer>
  )
}

// Properties
Actions.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  label: PropTypes.string,
  recommendation: PropTypes.object,
  style: PropTypes.object
}

// Export
export default Actions
