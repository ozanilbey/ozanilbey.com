// Modules
import React, { isValidElement } from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Link from '~/components/interface/link/Link'

// Style
import './Excerpt.less'

// Subcontent: Work > Excerpt
function Excerpt (props) {
  // Data
  const excerpt = {}
  if (props.data.year) excerpt.year = typeof props.data.year === 'number' ? props.data.year.toString() : props.data.year.join('–')
  if (props.data.role) excerpt.role = props.data.role
  if (props.data.tags) excerpt.tags = props.data.tags
  if (props.data.client) {
    excerpt.client = props.data.client.fullName || props.data.client.name
    if (props.data.client.link) excerpt.client = <Link type="external" href={`//${props.data.client.link}`}>{excerpt.client}</Link>
  }
  if (props.data.isLive) {
    excerpt.demo = (
      <>
        {props.data.link && <Link type="external" href={`//${props.data.link}`}>See it live</Link>}
        {props.data.repository && <Link type="external" href={`//${props.data.repository}`}>View repository</Link>}
      </>
    )
  }

  // Methods
  function renderValue (data) {
    if (typeof data === 'string' || isValidElement(data)) return <dd>{data}</dd>
    return data.map((item, index) => <dd key={index}>{item}</dd>)
  }

  // Render
  return (
    <Page.Section
      name="excerpt"
      data-content="excerpt">
      <Container isBlockLayout>
        {Object.keys(excerpt).map(key =>
          <dl
            key={key}
            className={key}>
            <dt>{key}</dt>
            {renderValue(excerpt[key])}
          </dl>
        )}
      </Container>
    </Page.Section>
  )
}

Excerpt.propTypes = {
  data: PropTypes.object
}

// Export
export default Excerpt
