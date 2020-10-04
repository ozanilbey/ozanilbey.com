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
import education from '~/data/education'

// Style
import './Education.less'

// Content: Education
function Education () {
  // Render
  return (
    <Page.Section
      name="education"
      data-content="education">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          Last but not least,
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          education
          <mark>*</mark>
        </Headline>
        <p className="lead">I love learning new things every day that has helped me become a <strong>self-taught designer+developer</strong>. I had chosen this path long before I studied design and business.</p>
      </Container>
      <Container>
        <SlidingBox>
          <Timeline
            data={education.map(item => ({ ...item, label: `${item.concentrations.join(' + ')}, ${item.school}` }))}
            unitSize={2 / 3} />
        </SlidingBox>
      </Container>
      <Container>
        <ul className="experience-list">
          {education
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
                        {item.school}
                      </Link>
                      : item.school
                  }
                </Heading>
                <p className="lead">{item.concentrations.join(' + ')}</p>
                <p className="detail">
                  <span className="date">{getMonthYearRange(item)}</span>
                  {item.isDropout && <span className="note">Dropout</span>}
                </p>
                <ExperienceSummary
                  type="education"
                  identifier={slug(item.school)} />
              </li>
            )
          }
        </ul>
        <div className="note">
          <mark>*</mark>
          <p className="detail">I have successfully taken <strong>86 courses</strong> from <strong>4 departments<strong> in </strong>2 universities</strong>.</p>
        </div>
      </Container>
    </Page.Section>
  )
}

// Export
export default Education
