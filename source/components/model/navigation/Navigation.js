// Modules
import React, { useState, useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// Components
import Container from '~/components/layout/container/Container'
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName } from '~/utilities/component'

// Constants
import { NAVIGATION_MENU_OPTIONS } from '~/constants/settings'

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
    if (NAVIGATION_MENU_OPTIONS.includes(props.page)) {
      setTimeout(() => {
        setLabel(props.page)
        setIsLabelVisible(true)
      }, 500)
    }
  }, [props.page])

  // Render
  return (
    <nav data-model="navigation">
      <Container>
        <div className="identity">
          <NavLink
            exact
            to="/"
            className="brand"
            activeClassName="active">
            ozanilbey
          </NavLink>
          <Link
            to={`/${label}`}
            data-label={label}
            className={getClassName('label', { visible: isLabelVisible })}>
            {label}
          </Link>
        </div>
        <div className="controls">
          <a
            className="menu-switch"
            onClick={() => props.toggleMenu()}>
            <Icon name={props.isMenuOpen ? 'exit' : 'hamburger-menu'} />
          </a>
          <a
            className="theme-switch"
            onClick={() => props.toggleTheme()}>
            <Icon name="contrast" />
          </a>
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
