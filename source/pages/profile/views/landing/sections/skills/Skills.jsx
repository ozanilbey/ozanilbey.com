// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Headline from '@source/components/model/headline/Headline'
import List from '@source/components/interface/list/List'
import Page from '@source/components/layout/page/Page'
import Separator from '@source/components/layout/separator/Separator'
import SkillLabels from '@source/components/content/skill-labels/SkillLabels'
import SkillMap from '@source/components/content/skill-map/SkillMap'
import SlidingBox from '@source/components/model/sliding-box/SlidingBox'

// Data
import allSkills from '@source/data/allSkills'
import technicalSkills from '@source/data/technicalSkills'

// Styles
import './Skills.scss'

// Section: Profile > Landing > Skills
function Skills () {
  // Render
  return (
    <Page.Section name="skills">
      <Content>
        <Headline
          isSingleLine
          displaySize="big"
          contentBefore="Let’s talk about">
          professional skills
        </Headline>
        <p className="lead">I have a wide range of digital product experience. My design work is focused on <strong>UI/UX/IxD</strong> while my development work is focused on <strong>design engineering</strong> and <strong>web app development</strong>.</p>
        <Separator
          hasLine={false}
          spacing="xlarge" />
        <SlidingBox>
          <SkillMap
            isLeftContinuous
            isRightContinuous
            unitSize={8}
            areas={[
              { name: 'Design', range: [0, 5] },
              { name: 'Development', range: [5, 8] }
            ]}
            skills={
              allSkills.map(item => ({
                description: item.skills.join(', '),
                name: item.category
              }))
            } />
        </SlidingBox>
        <Separator
          hasLine={false}
          spacing="xlarge" />
        <Heading rank={6}>Know-how</Heading>
        <List
          className="list"
            data ={[
            'Experience in managing product engineering teams',
            'Technical knowledge to create scalable software systems',
            'Proficiency in writing reusable and performant code',
            'Expertise on user experience design and user research',
            'Understanding of design principles and Gestalt theory',
            'Strong recognition of visual identity'
          ]} />
        <Separator
          hasLine={false}
          spacing="large" />
        <Heading rank={6}>Analytical Skills</Heading>
        <List
          className="list"
            data ={[
            'Design-oriented problem solving',
            'Creative ideation and conceptualization',
            'Balancing form and function on any given matter',
            'Developing models with contextual and visual coherence',
            'Discriminative and comparative case study and analysis',
            'Data-driven decision making and product analytics'
          ]} />
        <Separator
          hasLine={false}
          spacing="large" />
        <Heading rank={6}>Technical Skills</Heading>
        <SkillLabels data={technicalSkills} />
      </Content>
    </Page.Section>
  )
}

// Export
export default Skills
