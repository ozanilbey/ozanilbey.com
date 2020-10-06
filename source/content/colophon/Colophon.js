// Modules
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Stack from '~/components/layout/stack/Stack'
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'

// Helpers
import { checkIfClient } from '~/helpers/document'
import { getClassName } from '~/helpers/component'

// Utilities
import { upperCaseFirstLetter } from '~/utilities/format'

// Constants
import { PAGES_MENU_OPTIONS, COLOR_OPTIONS } from '~/constants/options'

// Data
import contactOptions from '~/data/contactOptions'
import professionalAccounts from '~/data/professionalAccounts'
import socialAccounts from '~/data/socialAccounts'

// Style
import './Colophon.less'

// Content: Colophon
function Colophon (props) {
  // References
  const colophon = useRef()

  // State
  const [isDisplayingCredits, setIsDisplayingCredits] = useState(false)

  // Methods
  function toggleCredits () {
    setIsDisplayingCredits(state => !state)
  }
  function sortByNameLength (x, y) {
    return x.name.length - y.name.length
  }

  // Effects
  useEffect(() => {
    function handleClick ({ target }) {
      if (colophon.current) {
        if (!colophon.current.contains(target)) setIsDisplayingCredits(false)
      }
    }
    if (checkIfClient()) {
      document.body.addEventListener('click', handleClick)
    }
    return () => {
      if (checkIfClient()) document.body.removeEventListener('click', handleClick)
    }
  }, [])

  // Render
  return (
    <footer
      ref={colophon}
      data-content="colophon">
      <Container>
        <Stack>
          <Stack.Item
            name="About"
            sizeS={12}
            sizeM={6}>
            <p>This website is an online portfolio showcasing works of <strong>Ozan İlbey Yılmaz</strong>. It is entirely open source. You can browse, modify, and use <Link type="external" href="//github.com/ozanilbey/ozanilbey.com">the code</Link>. You can even make it yours if you want to.</p>
            <p>It is built on <Link type="external" href="//github.com/ozanilbey/isomorphic">Isomorphic</Link>, an <strong>open source</strong> isomorphic JavaScript web application boilerplate. It is also developed by the author.</p>
            <div className={getClassName('credits', { visible: isDisplayingCredits })}>
              <strong onClick={toggleCredits}>{'Made on a Mac with  {'}</strong>
              {
                isDisplayingCredits
                  ? <ul>
                    <li data-key="technology">
                      <ul data-type="array">
                        <li>
                          <p>HTML</p>
                        </li>
                        <li>
                          <p>CSS</p>
                        </li>
                        <li>
                          <p>JavaScript</p>
                        </li>
                      </ul>
                    </li>
                    <li data-key="stack">
                      <ul data-type="array">
                        <li>
                          <p data-type="string"><Link type="external" href="//nodejs.org">Node.js</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//expressjs.com">Express</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//webpack.js.org">Webpack</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//babeljs.io">Babel</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//reactjs.org">React (Hooks)</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//reactrouter.com">React Router</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//github.com/nfl/react-helmet">React Helmet</Link></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//lesscss.org">LESS</Link></p>
                        </li>
                      </ul>
                    </li>
                    <li data-key="boilerplate">
                      <p data-type="string"><Link type="external" href="//github.com/ozanilbey/isomorphic">Isomorphic</Link></p>
                    </li>
                    <li data-key="fonts">
                      <ul data-type="array">
                        <li>
                          <p data-type="string"><Link type="external" href="//fonts.google.com/specimen/Inter">Inter</Link> <small>by <Link type="external" href="//rsms.me">Rasmus Andersson</Link></small></p>
                        </li>
                        <li>
                          <p data-type="string"><Link type="external" href="//fonts.google.com/specimen/Montserrat">Montserrat</Link></p>
                        </li>
                      </ul>
                    </li>
                    <li data-key="devTools">
                      <ul data-type="array">
                        <li>
                          <p><Link type="external" href="//git-scm.org">Git</Link> <small>by <Link type="external" href="//www.linkedin.com/in/linustorvalds">Linus Torvalds</Link></small></p>
                        </li>
                        <li>
                          <p><Link type="external" href="//standardjs.com">Standard</Link> <small>by <Link type="external" href="//feross.org">Feross Aboukhadijeh</Link></small></p>
                        </li>
                      </ul>
                    </li>
                    <li data-key="codeEditor">
                      <p data-type="string"><Link type="external" href="//atom.io">Atom</Link> <small>by <Link type="external" href="//github.com">GitHub</Link></small></p>
                    </li>
                    <li data-key="hosting">
                      <ul data-type="object">
                        <li data-key="code">
                          <p data-type="string"><Link type="external" href="//github.com">GitHub</Link></p>
                        </li>
                        <li data-key="image">
                          <p data-type="string"><Link type="external" href="//cloudinary.com">Coludinary</Link></p>
                        </li>
                        <li data-key="file">
                          <p data-type="string"><Link type="external" href="//digitalocean.com">DigitalOcean</Link></p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  : <strong
                    title="Click to expand"
                    onClick={toggleCredits}>
                    ···
                  </strong>
              }
              <strong onClick={toggleCredits}>{'}'}</strong>
            </div>
          </Stack.Item>
          <Stack.Item name="Pages">
            <ul className="links">
              {PAGES_MENU_OPTIONS.map(option =>
                <li key={option}>
                  <Link to={`/${option === 'home' ? '' : option}`}>
                    {upperCaseFirstLetter(option)}
                  </Link>
                </li>
              )}
            </ul>
          </Stack.Item>
          <Stack.Item name="Social">
            <ul className="links">
              {
                [...socialAccounts]
                  .sort(sortByNameLength)
                  .map(account =>
                    <li key={account.name}>
                      <Link
                        type="external"
                        href={`//${account.link}`}>
                        {account.name}
                      </Link>
                    </li>
                  )
              }
            </ul>
          </Stack.Item>
          <Stack.Item name="Pro">
            <ul className="links">
              {
                [...professionalAccounts]
                  .sort(sortByNameLength)
                  .map(account =>
                    <li key={account.name}>
                      <Link
                        type="external"
                        href={`//${account.link}`}>
                        {account.name}
                      </Link>
                    </li>
                  )
              }
            </ul>
          </Stack.Item>
          <Stack.Item name="Contact">
            <ul className="links">
              {
                [...contactOptions]
                  .sort(sortByNameLength)
                  .map(option =>
                    <li key={option.name}>
                      <Link
                        type="external"
                        href={option.link}>
                        {option.name}
                      </Link>
                    </li>
                  )
              }
            </ul>
          </Stack.Item>
        </Stack>
        <ul className="color">
          {COLOR_OPTIONS.map(option =>
            <li
              key={option}
              className={option === props.color ? 'active' : null}
              style={{
                borderColor: `var(--${option})`,
                backgroundColor: `var(--${option})`
              }}
              onClick={() => props.updateColor(option)}>
            </li>
          )}
        </ul>
      </Container>
    </footer>
  )
}

Colophon.propTypes = {
  color: PropTypes.oneOf(COLOR_OPTIONS),
  updateColor: PropTypes.func
}

// Export
export default Colophon
