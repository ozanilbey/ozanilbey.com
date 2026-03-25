// Modules
import { useState } from 'react'

// Components
import Content from '@source/components/layout/content/Content'
import Contracts from './components/contracts/Contracts'
import Headline from '@source/components/model/headline/Headline'
import Page from '@source/components/layout/page/Page'
import Separator from '@source/components/layout/separator/Separator'
import SlidingBox from '@source/components/model/sliding-box/SlidingBox'
import Tabbing from '@source/components/interface/tabbing/Tabbing'
import Timeline from '@source/components/content/timeline/Timeline'

// Utilities
import { uppercaseFirst } from '@source/utilities/format'

// Data
import experience from '@source/data/experience'

// Constants
import { EXPERIENCE_CONTRACT_TYPES } from '@source/constants/content'

// Styles
import './Experience.scss'

// Constants (Local)
const CONTRACT_TYPES = EXPERIENCE_CONTRACT_TYPES.map(type => ({ id: type, label: uppercaseFirst(type), value: type }))

// Section: Profile > Landing > Experience
function Experience () {
  // State
  const [contractType, setContractType] = useState(CONTRACT_TYPES[0].id)
  
  // Render
  return (
    <Page.Section name="experience">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="What about some">
          experience
        </Headline>
        <p className="lead">I have been working with/for startups to design and develop their digital products, manage their engineering teams, and <strong>delivering significant results</strong> since 2007. My freelance web design work starts even before that.</p>
        <Separator
          hasLine={false}
          spacing="xlarge" />
        <SlidingBox>
          <Timeline
            unitSize={2 / 3}
            className="timeline"
            data={
              experience.map(item => ({
                ...(item.for === 'Freelance'
                  ? ({
                    ...item,
                    isSeparate: true,
                    start: {
                      isOpen: true,
                      month: 1, // Actual month is 6
                      year: 2007 // Actual year is 2003
                    }
                  })
                  : item
                ),
                label: item.for
              }))
            } />
        </SlidingBox>
        <Separator
          hasLine={false}
          spacing="xlarge" />
        <Tabbing
          options={CONTRACT_TYPES}
          className="contract-types"
          value={CONTRACT_TYPES.find(type => type.id === contractType)}
          onChange={value => setContractType(value.id)} />
        <Separator
          hasLine={false}
          spacing="medium" />
        <Contracts type={contractType} />
      </Content>
    </Page.Section>
  )
}

// Export
export default Experience
