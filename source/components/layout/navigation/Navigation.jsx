// Modules
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Icon from '@source/components/interface/icon/Icon'
import Link from '@source/components/interface/link/Link'
import Logo from '@source/components/identity/logo/Logo'

// Hooks
import useMenu from '@source/hooks/useMenu'
import useRoute from '@source/hooks/useRoute'
import useScroll from '@source/hooks/useScroll'
import useTheme from '@source/hooks/useTheme'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Utilities
import { slug } from '@source/utilities/format'

// Data
import accounts from '@source/data/accounts'
import pages from '@source/data/pages'

// Styles
import './Navigation.scss'

// Component: Layout > Navigation
function Navigation ({ className, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Data
  const navigate = useNavigate()
  const { page: activePage } = useRoute()
  const { toggle: toggleTheme } = useTheme()
  useScroll()
  const { deactivate: deactivateMenu, isActive: isMenuActive, toggle: toggleMenu } = useMenu()

  // State
  const [label, setLabel] = useState('')
  const [isLabelVisible, setIsLabelVisible] = useState(false)
  const [nextRoute, setNextRoute] = useState(null)

  // Functions
  function handlePageChange (event, path) {
    event.preventDefault()
    deactivateMenu()
    setNextRoute(path)
  }

  // Effect
  useEffect(() => {
    let timer
    if (nextRoute) {
      timer = setTimeout(() => {
        navigate(nextRoute)
        setNextRoute(null)
      }, 250)
    }
    return () => clearTimeout(timer)
  }, [navigate, nextRoute])
  useEffect(() => {
    setIsLabelVisible(false)
    let timer
    if (pages.some(page => page.name === activePage)) {
      timer = setTimeout(() => {
        setLabel(activePage)
        setIsLabelVisible(true)
      }, 500)
    }
    return () => clearTimeout(timer)
  }, [activePage])

  // Render
  return (
    <nav
      {...attributes}
      id="navigation"
      className={className}
      data-layout="navigation"
      style={style}>
      <div className="menu">
        <ul className="links pages">
          {pages.map(page =>
            <li key={page.name}>
              <Link
                isExact={false}
                className={getClassName('link', { interactive: true })}
                onClick={event => handlePageChange(event, page.path)}
                to={page.path}>
                {page.name}
              </Link>
            </li>
          )}
        </ul>
        <ul className="links acounts">
          {accounts.map(account =>
            <li key={account.name}>
              <Link
                isExternal
                className={getClassName('link', { interactive: true })}
                href={`//${account.link}`}>
                <Icon
                  className="icon"
                  name={slug(account.name)} />
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className={getClassName('base', { blurred: true })}>
        <Link
          className={getClassName('menu link', { interactive: true })}
          onClick={toggleMenu}>
          <Icon
            className={getClassName('icon', { icon: isMenuActive ? 'exit' : 'hamburger-menu' })}
            name={isMenuActive ? 'exit' : 'hamburger-menu'} />
        </Link>
        <div className="identity">
          <Link
            to="/"
            isExact
            className="brand link"
            onClick={event => handlePageChange(event, '/')}>
            <Logo className="logo" />
          </Link>
          <Link
            isExact={false}
            to={`/${label}`}
            className={getClassName('label link', { target: label, visible: isLabelVisible })}
            onClick={event => handlePageChange(event, `/${label}`)}>
            {label}
          </Link>
        </div>
        <Link
          className={getClassName('theme link', { interactive: true })}
          onClick={toggleTheme}>
          <Icon
            name="contrast"
            className="icon" />
        </Link>
      </div>
    </nav>
  )
}

// Properties
Navigation.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Navigation
