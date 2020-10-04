// Modules
import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'

// Helpers
import { checkIfClient } from '~/helpers/document'

// Utilities
import { rgbColor } from '~/utilities/format'

// Style
import './Preview.less'

// Subcontent: Work > Preview
function Preview (props) {
  // State
  const [factor, setFactor] = useState(0)

  // Methods
  function getColorStyles () {
    const styles = {}
    if (props.data.colors) {
      const { primary, secondary } = props.data.colors
      if (primary) styles.backgroundColor = rgbColor(primary)
      if (secondary) styles.color = rgbColor(secondary)
    }
    return styles
  }

  // Effects
  useLayoutEffect(() => {
    function handleScroll () {
      if (window.scrollY <= 100) setFactor(window.scrollY)
    }
    if (checkIfClient()) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (checkIfClient()) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Render
  return (
    <Page.Header
      name="preview"
      data-content="preview"
      style={{
        borderRadius: `${factor / 100}rem`,
        transform: `perspective(400px) translateZ(-${factor}px)`,
        ...getColorStyles()
      }}>
      <Container isBlockLayout>
        {props.children}
      </Container>
    </Page.Header>
  )
}

// Properties
Preview.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object
}

// Export
export default Preview
