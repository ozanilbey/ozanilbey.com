// Modules
import PropTypes from 'prop-types'

// Components
import Link from '@source/components/interface/link/Link'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Data
import accounts from '@source/data/accounts'
import pages from '@source/data/pages'
import workTypes from '@source/data/workTypes'

// Styles
import './Links.scss'

// Constants (Local)
const LISTED_WORK_TYPES = ['ui-ux-ixd', 'branding', 'collections']

// Component: Layout > Colophon > Links
function Links ({ className, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <ul
      {...attributes}
      data-component="links"
      className={getClassName(className, { categories: true })}
      style={style}>
      <li className="category">
        <ul
          data-label="Pages"
          className="options">
          {pages.map(page =>
            <li
              className="option"
              key={page.name}>
              <Link
                className="link"
                to={page.path}>
                {page.label}
              </Link>
            </li>
          )}
        </ul>
      </li>
      <li className="category">
        <ul
          data-label="Works"
          className="options">
          <li className="option">
            <Link
              className="link"
              to="works/featured#portfolio">
              Featured
            </Link>
          </li>
          {workTypes
            .filter(workType => LISTED_WORK_TYPES.includes(workType.code))
            .map(workType =>
            <li
              className="option"
              key={workType.code}>
              <Link
                className="link"
                to={`/works/${workType.code}#portfolio`}
                onClick={() => window.scrollTo(0, 0)}>
                {workType.name}
              </Link>
            </li>
          )}
        </ul>
      </li>
      <li className="category">
        <ul
          data-label="Contact"
          className="options">
          {accounts.map(account =>
            <li
              className="option"
              key={account.name}>
              <Link
                isExternal
                className="link"
                href={`//${account.link}`}>
                {account.name}
              </Link>
            </li>
          )}
          <li className="option">
            <Link
              className="link"
              href="/contact#form">
              Message
            </Link>
          </li>
          <li className="option">
            <Link
              className="link"
              href="/contact#booking">
              Book a call
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}

// Properties
Links.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Links
