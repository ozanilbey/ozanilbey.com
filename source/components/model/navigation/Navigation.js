// Modules
import React, { useContext, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

// Components
import Logo from '~/components/identity/logo/Logo'
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'
import Link from '~/components/interface/link/Link'
import Icon from '~/components/interface/icon/Icon'

// Context
import ControllerContext from '~/context/Controller'
// Helpers
import { getClassName } from '~/helpers/component'

// Utilities
import { slug } from '~/utilities/format'

// Data
import professionalAccounts from '~/data/professionalAccounts'

// Constants
import { PAGES_MENU_OPTIONS, NETWORKS_MENU_OPTIONS } from '~/constants/options'

// Style
import './Navigation.less'

// Component: Model > Navigation
function Navigation (props) {
  // Data
  const history = useHistory()

  // References
  const base = useRef()

  // State
  const [label, setLabel] = useState('')
  const [isLabelVisible, setIsLabelVisible] = useState(false)
  const [nextRoute, setNextRoute] = useState(null)

  // Methods
  function handlePageChange (event, path) {
    event.preventDefault()
    props.toggleMenu()
    setNextRoute(path)
  }

  // Effect
  useEffect(() => {
    let timer
    if (nextRoute) {
      timer = setTimeout(() => {
        history.push(nextRoute)
        setNextRoute(null)
      }, 350)
    }
    return () => clearTimeout(timer)
  }, [nextRoute, history])
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
      <div className="menu">
        <Container>
          <Stack
            willWrap
            vertical="middle">
            <Stack.Item
              sizeS={12}
              sizeM={9}>
              <ul className="pages">
                {PAGES_MENU_OPTIONS.map(option =>
                  <li key={option}>
                    <Link
                      href={`/${option === 'home' ? '' : option}`}
                      className={`${option} item`}
                      onClick={event => handlePageChange(event, `/${option === 'home' ? '' : option}`)}>
                      {option}
                    </Link>
                  </li>
                )}
              </ul>
            </Stack.Item>
            <Stack.Item
              sizeS={12}
              sizeM={3}>
              <ul className="social">
                {
                  professionalAccounts
                    .filter(option => NETWORKS_MENU_OPTIONS.includes(slug(option.name)))
                    .map(option =>
                      <li key={option.name}>
                        <Link
                          isArrowHidden
                          type="external"
                          href={`//${option.link}`}>
                          <Icon name={slug(option.name)} />
                        </Link>
                      </li>
                    )
                }
              </ul>
            </Stack.Item>
          </Stack>
        </Container>
      </div>
      <div
        ref={base}
        className="base">
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
              className="menu"
              onClick={() => props.toggleMenu()}>
              <Icon name={props.isMenuOpen ? 'exit' : 'hamburger-menu'} />
            </Link>
            <Link
              className="color"
              onClick={() => props.shiftColor()}>
              <Icon name="color" />
            </Link>
            <Link
              className="theme"
              onClick={() => props.toggleTheme()}>
              <Icon name="contrast" />
            </Link>
          </div>
        </Container>
      </div>
    </nav>
  )
}

// Properties
Navigation.propTypes = {
  colors: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  page: PropTypes.string,
  shiftColor: PropTypes.func,
  toggleMenu: PropTypes.func,
  toggleTheme: PropTypes.func
}

// Export
export default Navigation
