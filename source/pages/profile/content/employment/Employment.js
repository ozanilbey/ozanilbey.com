// Modules
import React from 'react'

// Components
import Headline from '~/components/model/headline/Headline'
import SlidingBox from '~/components/model/sliding-box/SlidingBox'
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import Timeline from '~/components/content/timeline/Timeline'

// Content
import ExperienceSummary from '~/content/experience-summary/ExperienceSummary'

// Helpers
import { sortMonthYearByDate, getMonthYearRange } from '~/helpers/content'

// Utilities
import { slug } from '~/utilities/format'

// Data
import employment from '~/data/employment'

// Style
import './Employment.less'

// Subcontent: Profile > Employment
function Employment () {
  // Render
  return (
    <Page.Section
      name="employment"
      data-content="employment">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          What about some
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          experience
        </Headline>
        <p className="lead">I’ve been working with/for companies to design & develop digital products and <strong>delivering significant results</strong> since 2007. My freelance web design work starts even before that.</p>
      </Container>
      <Container>
        <SlidingBox>
          <Timeline
            data={
              employment
                .map(item =>
                  item.for === 'Freelance'
                    ? ({
                      ...item,
                      start: {
                        year: 2007, // Actual year is 2003
                        month: 1, // Actual month is 6
                        isOpen: true
                      },
                      isSeparate: true
                    })
                    : item
                )
                .map(item => ({
                  ...item,
                  label: item.for
                }))
            }
            unitSize={2 / 3} />
        </SlidingBox>
      </Container>
      <Container>
        <ul className="experience-list">
          {employment
            .sort(sortMonthYearByDate)
            .map((item, index) =>
              <li key={index}>
                <Heading
                  isSingleLine
                  rank={6}>
                  {
                    item.link
                      ? <Link
                        type="external"
                        href={`//${item.link}`}>
                        {item.for}
                      </Link>
                      : item.for
                  }
                </Heading>
                <p className="lead">{item.role}</p>
                <p className="detail">
                  <span className="date">{getMonthYearRange(item)}</span>
                  {item.location && <span className="location">{item.location}</span>}
                  {item.isRemote && <span className="note">Remote</span>}
                </p>
                <ExperienceSummary
                  type="employment"
                  identifier={slug(item.for)} />
              </li>
            )
          }
        </ul>
      </Container>
    </Page.Section>
  )
}

// Export
export default Employment
