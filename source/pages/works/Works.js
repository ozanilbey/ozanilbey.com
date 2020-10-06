// Modules
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Content
import Meta from '~/content/meta/Meta'

// Subpages
import Work from './work/Work'

// Hooks
import useWork from '~/hooks/useWork'

// Utilities
import { slug } from '~/utilities/format'

// Data
import works from '~/data/works'

// Constants
import { WORK_FILTERS, SELECTED_WORKS } from '~/constants/content'

// Style
import './Works.less'

// Page: Works
function Works () {
  // Data
  const { push } = useHistory()
  const { workOrFilter } = useParams()
  const workData = useWork(getWorkIndex(workOrFilter) > -1 ? workOrFilter : null)
  const selectedWorksLabel = WORK_FILTERS[0]

  // State
  const [workSet, setWorkSet] = useState(SELECTED_WORKS)

  // Methods
  function getFilterIndex (filter) {
    return WORK_FILTERS.map(filter => slug(filter)).indexOf(filter)
  }
  function getWorkIndex (work) {
    return works.map(work => work.slug).indexOf(work)
  }
  function filterWorks (option) {
    let target = '/works'
    target += `/${slug(option)}`
    push(target)
  }
  function getFilter () {
    const index = getFilterIndex(workOrFilter)
    return index < 0 ? selectedWorksLabel : WORK_FILTERS[index]
  }
  function getRecommendation () {
    let slug
    const index = workSet.indexOf(workOrFilter)
    if (workSet.length > 2) slug = workSet[(index + 1) % workSet.length]
    return works.filter(work => work.slug === slug)[0]
  }

  // Effects
  useEffect(() => {
    if (!workOrFilter || workOrFilter === slug(selectedWorksLabel)) {
      setWorkSet(SELECTED_WORKS)
    } else {
      const index = getFilterIndex(workOrFilter)
      if (index < 0) {
        if (works.map(work => work.slug).indexOf(workOrFilter) < 0) push('/works')
      } else {
        setWorkSet(
          works
            .filter(work => work.tags.map(tag => slug(tag)).includes(workOrFilter))
            .map(work => work.slug)
        )
      }
    }
  }, [workOrFilter, selectedWorksLabel, push])

  // Render
  return workData
    ? <Work
      slug={workOrFilter}
      data={workData}
      next={getRecommendation()} />
    : <Page name="works">
      <Meta
        page="works"
        category={getFilter() === selectedWorksLabel ? null : getFilter()} />
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Works</Heading>
          <p>This is <b>Works</b> page.</p>
        </Container>
      </Page.Header>
      <Page.Section>
        <Container>
          <b>All works</b>
          <ul>
            <li><Link to="/works/sample">Sample Work</Link></li>
          </ul>
        </Container>
      </Page.Section>
    </Page>
}

// Export
export default Works
