// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Constants
import { LEVEL_OPTIONS } from '~/constants/options'

// Style
import './SkillLabels.less'

// Component: Content > SkillLabels
function SkillLabels (props) {
  // Render
  return (
    <div data-content="skill-labels">
      <ul className="labels">
        {props.data.map((skill, index) =>
          <li key={index}>
            <dl>
              <dt>{skill.name}</dt>
              {skill.items && skill.items.map((item, index) =>
                <dd
                  key={index}
                  data-level={LEVEL_OPTIONS[item.level]}>
                  {item.name}
                </dd>
              )}
            </dl>
          </li>
        )}
      </ul>
      <ul className="legend">
        {LEVEL_OPTIONS.map((level, index) =>
          <li
            key={index}
            data-level={LEVEL_OPTIONS[index]}>
            {level}
          </li>
        )}
      </ul>
    </div>
  )
}

// Properties
SkillLabels.propTypes = {
  data: PropTypes.array
}

// Export
export default SkillLabels
