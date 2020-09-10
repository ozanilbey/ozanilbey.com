// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Logo from '~/components/identity/logo/Logo'
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName } from '~/utilities/component'

// Constants
import { PAGES_MENU_OPTIONS } from '~/constants/options'

// Style
import './Navigation.less'

// Component: Model > Navigation
function Navigation (props) {
  // State
  const [label, setLabel] = useState('')
  const [isLabelVisible, setIsLabelVisible] = useState(false)

  // Effect
  useEffect(() => {
    setIsLabelVisible(false)
    let timer
    if (PAGES_MENU_OPTIONS.includes(props.page)) {
      timer = setTimeout(() => {
        setLabel(props.page)
        setIsLabelVisible(true)
      }, 500)
    }
    return () => clearTimeout(timer)
  }, [props.page])

  // Render
  return (
    <nav data-model="navigation">
      <Container>
        <div className="identity">
          <Link
            exact
            to="/"
            className="brand"
            activeClassName="active">
            <Logo />
          </Link>
          <Link
            to={`/${label}`}
            data-label={label}
            className={getClassName('label', { visible: isLabelVisible })}>
            {label}
          </Link>
        </div>
        <div className="controls">
          <Link
            className="menu-switch"
            onClick={() => props.toggleMenu()}>
            <Icon name={props.isMenuOpen ? 'exit' : 'hamburger-menu'} />
          </Link>
          <Link
            className="theme-switch"
            onClick={() => props.toggleTheme()}>
            <Icon name="contrast" />
          </Link>
        </div>
      </Container>
    </nav>
  )
}

// Properties
Navigation.propTypes = {
  isMenuOpen: PropTypes.bool,
  page: PropTypes.string,
  toggleMenu: PropTypes.func,
  toggleTheme: PropTypes.func
}

// Export
export default Navigation
