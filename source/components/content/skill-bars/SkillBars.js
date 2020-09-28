// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Stack from '~/components/layout/stack/Stack'

// Utilities
import { getTwoPointFormEquivalent } from '~/utilities/math'

// Style
import './SkillBars.less'

// Component: Content > Skill Bars
function SkillBars (props) {
  // Data
  const currentYear = new Date().getFullYear()
  const startingYear = Math.min(...props.data.map(item => item.year))

  // Render
  return (
    <Stack
      willWrap
      data-content="skill-bars">
      {
        props.data.map((skill, index) =>
          <Stack.Item
            key={index}
            sizeS={12}
            sizeM={6}
            sizeL={4}>
            <div
              data-year={currentYear - skill.year}
              style={{
                width: `${
                  getTwoPointFormEquivalent(
                    currentYear - skill.year, // year
                    0, // minimum year
                    currentYear - startingYear, // maximum year
                    0, // minimum width
                    100 // maximum width
                  )
                }%`
              }}>
              {skill.name}
            </div>
          </Stack.Item>
        )
      }
    </Stack>
  )
}

// Properties
SkillBars.propTypes = {
  data: PropTypes.array
}

// Export
export default SkillBars
