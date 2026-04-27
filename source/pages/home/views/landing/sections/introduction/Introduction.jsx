// Modules
import { useEffect, useRef, useState } from 'react'

// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Hint from '@source/components/model/hint/Hint'
import Icon from '@source/components/interface/icon/Icon'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Helpers
import { getClassName } from '@source/helpers/component'

// Styles
import './Introduction.scss'

// Section: Home > Landing > Introduction (Header)
function Introduction () {
  // References
  const pronunciation = useRef()

  // State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  // Functions
  function handlePronunciation () {
    if (!isPlayingAudio) {
      setIsPlayingAudio(true)
      pronunciation.current.play()
    }
  }

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlayingAudio(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [isPlayingAudio])

  // Render
  return (
    <Page.Header name="introduction">
      <Content>
        <Headline displaySize="biggest">
          {'Converting '}
          <Hint
            isBodyClickable
            text="Obsessive-compulsive disorder">
            OCD
          </Hint>
          {' to '}
          <Hint
            isBodyClickable
            text="Interaction design">
            IxD
          </Hint>
          <br />
          since 2003.
        </Headline>
        <p className="greeting lead">
          <strong>Hi, my name is Ozan</strong>
          <span
            data-text="/oʊ'zɑ:n/"
            className={getClassName('pronunciation', { active: isPlayingAudio })}
            onClick={handlePronunciation}
            onTouchStart={handlePronunciation}>
            <Icon
              name="audio"
              className="icon" />
          </span>
          <audio ref={pronunciation}>
            <source src="/audios/ozan.mp3" type="audio/mpeg" />
            <source src="/audios/ozan.ogg" type="audio/ogg" />
          </audio>
        </p>
        <p className="lead">I’m a <strong>designer<mark className="mark">+</mark>developer</strong> based in <strong>San Francisco</strong>. I’ve been designing, developing, and managing digital products for <strong>20+ years</strong>. I have been exclusively working on <strong>0→1 consumer AI products</strong> for the last 7 years.</p>
        <ul className="actions">
          <li className="action primary">
            <Link
              to="/works"
              variant="button">
              Browse portfolio
            </Link>
          </li>
          <li className="action secondary">
            <Link
              arrow="right"
              to="/profile">
              Learn more
            </Link>
          </li>
        </ul>
      </Content>
    </Page.Header>
  )
}

// Export
export default Introduction
