// Modules
import React, { useState, useEffect, useRef } from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Headline from '~/components/model/headline/Headline'
import Link from '~/components/interface/link/Link'
import Icon from '~/components/interface/icon/Icon'

// Helpers
import { getClassName } from '~/helpers/component'

// Style
import './Welcome.less'

// Content: Welcome
function Welcome () {
  // References
  const pronunciation = useRef()

  // State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  // Methods
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
    <Page.Header
      name="welcome"
      data-content="welcome">
      <Container>
        <Headline displaySize="bigger">Hello there.</Headline>
        <p className="lead">
          <strong>My name is Ozan</strong>
          <a
            className={getClassName('pronunciation', { active: isPlayingAudio })}
            data-text="/oʊ'zɑ:n/"
            onClick={handlePronunciation}
            onTouchStart={handlePronunciation}>
            <Icon name="audio" />
          </a>
        </p>
        <p className="lead">I’ve been designing, developing, and managing digital products for <strong>15+ years</strong>. Previously, I’ve founded Semantica and created <Link type="regular" to="/works/piccture">Piccture</Link>, <Link type="regular" to="/works/cardz">Cardz</Link>, and <Link type="regular" to="/works/favogue">Favogue</Link>.</p>
        <audio ref={pronunciation}>
          <source src="/audios/ozan.mp3" type="audio/mpeg" />
          <source src="/audios/ozan.ogg" type="audio/ogg" />
        </audio>
      </Container>
    </Page.Header>
  )
}

// Export
export default Welcome
