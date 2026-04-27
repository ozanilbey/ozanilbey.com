// Modules
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '@source/components/interface/link/Link'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Credits.scss'

// Component: Layout > Colophon > Credits
function Credits ({ className, style, ...rest }) {
  // References
  const credits = useRef()

  // State
  const [isVisible, setIsVisible] = useState(false)

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions
  function toggle () {
    setIsVisible(isVisible => !isVisible)
  }

  // Effects
  useEffect(() => {
    function handleClick ({ target }) {
      if (credits.current) {
        if (!credits.current.contains(target) && !target.classList.contains('trigger')) {
          setIsVisible(false)
        }
      }
    }
    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [])

  // Render
  return (
    <div
      ref={credits}
      {...attributes}
      data-component="credits"
      className={getClassName(className, { visible: isVisible })}
      style={style}>
      <strong
        className="wrapper start trigger"
        onClick={toggle}>
        Made with {'{'}
      </strong>
      {isVisible
        ? <ul className="root">
          <li data-key="code">
            <ul className="object">
              <li data-key="editor">
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//cursor.com">
                    Cursor
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      to="//anysphere.inc">
                      Anysphere, Inc.
                    </Link>
                  </small>
                </p>
              </li>
              <li data-key="model">
                <p className="string">
                  <Link
                    isExternal
                    to="//grok.com"
                    arrow="upright"
                    className="link">
                    Grok
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      to="//x.ai"
                      arrow="upright"
                      className="link">
                      xAI, Corp.
                    </Link>
                  </small>
                </p>
              </li>
            </ul>
          </li>
          <li data-key="deployment">
            <p className="string">
              <Link
                isExternal
                arrow="upright"
                className="link"
                to="//render.com">
                Render
              </Link>
            </p>
          </li>
          <li data-key="devTools">
            <ul className="array">
              <li>
                <p>
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//git-scm.org">
                    Git
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      to="//www.linkedin.com/in/linustorvalds">
                      Linus Torvalds
                    </Link>
                  </small>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal 
                    to="//vite.dev"
                    arrow="upright"
                    className="link">
                    Vite
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      to="//voidzero.dev">
                      VoidZero, Inc.
                    </Link>
                  </small>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//eslint.org">
                    ESLint
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      to="//openjsf.org">
                      OpenJS Foundation
                    </Link>
                  </small>
                </p>
              </li>
            </ul>
          </li>
          <li data-key="font">
            <p className="string">
              <Link
                isExternal
                arrow="upright"
                className="link"
                to="//fonts.google.com/specimen/Inter">
                Inter
              </Link>
              <small>
                <span className="by">by</span>
                <Link
                  isExternal
                  to="//rsms.me"
                  arrow="upright"
                  className="link">
                  Rasmus Andersson
                </Link>
              </small>
            </p>
          </li>
          <li data-key="hosting">
            <ul className="object">
              <li data-key="code">
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//github.com">
                    GitHub
                  </Link>
                </p>
              </li>
              <li data-key="image">
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//cloudinary.com">
                    Cloudinary
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li data-key="libraries">
            <ul className="array">
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//reactrouter.com">
                    React Router
                  </Link>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//github.com/nfl/react-helmet">
                    React Helmet
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li data-key="stack">
            <ul className="array">
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//nodejs.org">
                    Node.js
                  </Link>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//expressjs.com">
                    Express
                  </Link>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//reactjs.org">
                    React
                  </Link>
                </p>
              </li>
              <li>
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    to="//sass-lang.com">
                    Sass
                  </Link>
                </p>
              </li>
            </ul>
          </li>
        </ul>
        : <strong
          className="ellipsis trigger"
          title="Click to expand"
          onClick={toggle}>
          ···
        </strong>
      }
      <strong
        className="wrapper end trigger"
        onClick={toggle}>
        {'}'}
      </strong>
    </div>
  )
}

// Properties
Credits.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Credits
