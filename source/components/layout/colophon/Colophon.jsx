// Modules
import PropTypes from 'prop-types'

// Components
import Credits from './components/credits/Credits'
import Icon from '@source/components/interface/icon/Icon'
import Link from '@source/components/interface/link/Link'
import Links from './components/links/Links'

// Hooks
import useColor from '@source/hooks/useColor'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Constants
import { COLORS } from '@source/constants/options'

// Styles
import './Colophon.scss'

// Component: Layout > Colophon
function Colophon ({ className, style, ...rest }) {
  // Data
  const { current: color, set: setColor } = useColor()
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <footer
      id="colophon"
      {...attributes}
      className={className}
      data-layout="colophon"
      style={style}>
      <span className="separator">
        <Icon name="scissors" />
      </span>
      <main className="information">
        <section className="links">
          <Links />
        </section>
        <section
          className="about"
          data-label="about">
          <p className="paragraph">This website is an online portfolio of <strong>Ozan Yilmaz</strong>.</p>
          <p className="paragraph">
            <Link
              isExternal
              arrow="upright"
              className="link"
              href="//github.com/ozanilbey/ozanilbey.com">
              The code
            </Link>
            {' is entirely open source. You can browse, use, and modify it. If you want, you can even make it completely yours.'}
          </p>
          <Credits className="credits" />
        </section>
      </main>
      <aside className="settings">
        <ul className="color">
          {COLORS.map(colorOption =>
            <li
              key={colorOption}
              className={colorOption === color ? 'active' : null}
              style={{
                backgroundColor: `var(--brand-${colorOption}-color)`,
                borderColor: `var(--brand-${colorOption}-color)`
              }}
              onClick={() => setColor(colorOption)}>
            </li>
          )}
        </ul>
      </aside>
    </footer>
  )
}

// Properties
Colophon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Colophon
