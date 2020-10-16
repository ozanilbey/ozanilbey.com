// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Headline from '~/components/model/headline/Headline'
import SlidingBox from '~/components/model/sliding-box/SlidingBox'
import Link from '~/components/interface/link/Link'
import Heading from '~/components/type/heading/Heading'
import SkillMap from '~/components/content/skill-map/SkillMap'

// Data
import allSkills from '~/data/allSkills'

// Style
import './Profile.less'

// Subcontent: Home > Profile
function Profile () {
  // Render
  return (
    <Page.Section
      name="profile"
      data-content="profile">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          I’m basically a
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          designer
          <mark>+</mark>
          developer
        </Headline>
        <p className="lead">Although my design work is mostly focused on <strong>UX</strong>/<strong>UI</strong>/<strong>IxD</strong>, I have a wide range of design experience, from <strong>branding</strong> to <strong>animation</strong>, even <strong>printmaking</strong>. Plus, I’m able to create <strong>functional UI prototypes</strong>, and develop <strong>full-stack JavaScript applications</strong> on Node with GraphQL APIs and React (Native) mobile/web clients. <Link type="cta" to="/profile">Read more</Link></p>
      </Container>
      <Container>
        <SlidingBox>
          <SkillMap
            isLeftContinuous
            isRightContinuous
            unitSize={8}
            sections={[
              { name: 'Design', range: [0, 5] },
              { name: 'Development', range: [5, 9] }
            ]}
            skills={
              allSkills
                .map(item => ({
                  name: item.category,
                  description: item.skills.join(', ')
                }))
                .concat(['Testing & QA', 'DevOps'].map(name => ({ name, isDisabled: true })))
            } />
        </SlidingBox>
      </Container>
    </Page.Section>
  )
}

// Export
export default Profile
