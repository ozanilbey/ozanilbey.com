// Modules
import React from 'react'

// Components
import Headline from '~/components/model/headline/Headline'
import Container from '~/components/layout/container/Container'
import Page from '~/components/layout/page/Page'
import Heading from '~/components/type/heading/Heading'
import SkillBars from '~/components/content/skill-bars/SkillBars'
import SkillLabels from '~/components/content/skill-labels/SkillLabels'
import List from '~/components/content/list/List'

// Data
import professionalSkills from '~/data/professionalSkills'
import technicalSkills from '~/data/technicalSkills'

// Style
import './ProfessionalSkills.less'

// Subcontent: Profile > Professional Skills
function ProfessionalSkills () {
  // Render
  return (
    <Page.Section
      name="professional-skills"
      data-content="professional-skills">
      <Container>
        <Heading
          isSingleLine
          className="dim"
          rank={4}>
          Let me tell you about my
        </Heading>
        <Headline
          isSingleLine
          displaySize="big">
          professional skills
        </Headline>
        <p className="lead">I have diverse professional experience: Design, development, and product management. I have spent many years to master my skills.</p>
      </Container>
      <Container>
        <SkillBars data={professionalSkills} />
      </Container>
      <Container>
        <Heading rank={6}>Know-how</Heading>
        <List data ={[
          'An understanding of basic design principles and Gestalt theory',
          'Expertise on user experience design and user research',
          'Using design patterns in semantically correct way',
          'A strong recognition of visual identity',
          'Technical knowledge to create media for diverse platforms'
        ]} />
      </Container>
      <Container>
        <Heading rank={6}>Analytical Skills</Heading>
        <List data ={[
          'Design-oriented problem solving',
          'Creative ideation and conceptualization',
          'Balancing form and function on any given matter',
          'Developing models with contextual and visual coherence',
          'Discriminative and comparative case study and feedback analysis'
        ]} />
      </Container>
      <Container>
        <Heading rank={6}>Technical Skills</Heading>
        <SkillLabels data={technicalSkills} />
      </Container>
    </Page.Section>
  )
}

// Export
export default ProfessionalSkills
