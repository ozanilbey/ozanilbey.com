// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { getClassName } from '~/utilities/component'

// Style
import './SkillMap.less'

// Component: Content > SkillMap
function SkillMap (props) {
  // Methods
  function renderArrow (side) {
    return (
      <span
        className={`${side} arrow`}
        style={{ width: `${props.unitSize / 2 - 0.75}rem` }}>
      </span>
    )
  }

  // Render
  return (
    <div
      data-content="skill-map"
      style={{ width: `${props.skills.length * props.unitSize}rem` }}>
      <div
        className="sections"
        style={{ margin: `0 calc(${props.unitSize / 2}rem - 1px)` }}>
        {props.isLeftContinuous && renderArrow('left')}
        {props.sections.map((section, index) =>
          <div
            key={index}
            className="section"
            style={{ width: `${(section.range[1] - section.range[0]) * props.unitSize}rem` }}>
            {section.name}
          </div>
        )}
        {props.isRightContinuous && renderArrow('right')}
      </div>
      <ul className="skills">
        {props.skills.map((skill, index) =>
          <li
            key={index}
            className={getClassName('skill', {
              disabled: skill.isDisabled,
              distant: Boolean(index % 2)
            })}
            style={{ left: `${index * props.unitSize}rem` }}>
            <div className="name">{skill.name}</div>
            <div className="description">{skill.description}</div>
          </li>
        )}
      </ul>
    </div>
  )
}

// Properties
SkillMap.propTypes = {
  className: PropTypes.string,
  isLeftContinuous: PropTypes.bool,
  isRightContinuous: PropTypes.bool,
  sections: PropTypes.array,
  skills: PropTypes.array,
  unitSize: PropTypes.number
}

// Export
export default SkillMap
