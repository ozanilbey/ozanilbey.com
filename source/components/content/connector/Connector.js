// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '~/components/interface/link/Link'
import Card from '~/components/interface/card/Card'
import Icon from '~/components/interface/icon/Icon'

// Utilities
import { getClassName } from '~/utilities/component'
import { slug } from '~/utilities/format'

// Style
import './Connector.less'

// Component: Content > Connector
function Connector (props) {
  // Data
  const className = getClassName(null, {
    'text-align': props.isCentered ? 'center' : null,
    'with-label': !!props.label
  })

  // Methods
  function getColor (rgb) {
    if (!rgb) return null
    return `rgb(${rgb.join(', ')})`
  }

  // Render
  return (
    <ul
      data-content="connector"
      data-label={props.label}
      className={className}>
      {props.data.map((item, index) =>
        <li key={index}>
          <Link
            isArrowHidden
            data-label={item.name}
            type="external"
            href={item.link}>
            <Card
              isCustom
              color={props.isIconColored ? null : getColor(item.color)}>
              <Icon
                name={slug(item.name)}
                color={props.isIconColored ? getColor(item.color) : null}
                className="icon" />
            </Card>
          </Link>
        </li>
      )}
    </ul>
  )
}

// Properties
Connector.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isCentered: PropTypes.bool,
  isIconColored: PropTypes.bool,
  label: PropTypes.string
}

// Export
export default Connector
