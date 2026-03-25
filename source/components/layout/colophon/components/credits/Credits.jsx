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
                    href="//cursor.com">
                    Cursor
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      href="//anysphere.inc">
                      Anysphere, Inc.
                    </Link>
                  </small>
                </p>
              </li>
              <li data-key="model">
                <p className="string">
                  <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    href="//grok.com">
                    Grok
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      href="//x.ai">
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
                href="//render.com">
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
                    href="//git-scm.org">
                    Git
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      href="//www.linkedin.com/in/linustorvalds">
                      Linus Torvalds
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
                    href="//vite.dev">
                    Vite
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      href="//voidzero.dev">
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
                    href="//eslint.org">
                    ESLint
                  </Link>
                  <small>
                    <span className="by">by</span>
                    <Link
                      isExternal
                      arrow="upright"
                      className="link"
                      href="//openjsf.org/">
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
                href="//fonts.google.com/specimen/Inter">
                Inter
              </Link>
              <small>
                <span className="by">by</span>
                <Link
                  isExternal
                  arrow="upright"
                  className="link"
                  href="//rsms.me">
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
                    href="//github.com">
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
                    href="//cloudinary.com">
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
                    href="//reactrouter.com">
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
                    href="//github.com/nfl/react-helmet">
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
                    href="//nodejs.org">
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
                    href="//expressjs.com">
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
                    href="//reactjs.org">
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
                    href="//sass-lang.com">
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
