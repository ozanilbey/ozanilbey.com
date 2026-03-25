// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './SkillMap.scss'

// Component: Content > Skill map
function SkillMap ({ className, areas, isLeftContinuous, isRightContinuous, skills, unitSize, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Functions
  function renderArrow (side) {
    return (
      <span
        className={`${side} arrow`}
        style={{ width: `${unitSize / 2 - 0.75}rem` }}>
      </span>
    )
  }

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-content="skill-map"
      style={{
        ...style,
        width: `${skills.length * unitSize}rem`
      }}>
      <div
        className="areas"
        style={{ margin: `0 calc(${unitSize / 2}rem - 1px)` }}>
        {isLeftContinuous && renderArrow('left')}
        {areas.map((area, index) =>
          <div
            key={index}
            className="area"
            style={{ width: `${(area.range[1] - area.range[0]) * unitSize}rem` }}>
            {area.name}
          </div>
        )}
        {isRightContinuous && renderArrow('right')}
      </div>
      <ul className="skills">
        {skills.map((skill, index) =>
          <li
            key={index}
            className={getClassName('skill', {
              disabled: skill.isDisabled,
              distant: Boolean(index % 2)
            })}
            style={{ left: `${index * unitSize}rem` }}>
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
  areas: PropTypes.array,
  className: PropTypes.string,
  isLeftContinuous: PropTypes.bool,
  isRightContinuous: PropTypes.bool,
  skills: PropTypes.array,
  unitSize: PropTypes.number
}

// Export
export default SkillMap
