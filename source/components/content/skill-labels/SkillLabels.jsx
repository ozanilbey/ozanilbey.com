// Modules
import PropTypes from 'prop-types'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Constants
import { LEVELS } from '@source/constants/options'

// Styles
import './SkillLabels.scss'

// Component: Content > Skill labels
function SkillLabels ({ className, data, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-content="skill-labels"
      style={style}>
      <ul className="categories">
        {data.map((skill, index) =>
          <li
            key={index}
            className="category"
            data-label={skill.name}>
            {skill.items?.length > 0 &&
              <ul className="items">
                {skill.items.map((item, index) =>
                  <li
                    key={index}
                    className={getClassName('item', { level: LEVELS[item.level] })}>
                    {item.name}
                  </li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>
    </div>
  )
}

// Properties
SkillLabels.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  style: PropTypes.object
}

// Export
export default SkillLabels
