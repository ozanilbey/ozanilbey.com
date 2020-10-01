// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '~/components/interface/link/Link'
import Card from '~/components/interface/card/Card'
import Icon from '~/components/interface/icon/Icon'

// Helpers
import { getClassName } from '~/helpers/component'

// Utilities
import { slug, rgbColor } from '~/utilities/format'

// Style
import './ConnectButtons.less'

// Component: Content > Connect Buttons
function ConnectButtons (props) {
  // Data
  const className = getClassName(null, {
    'text-align': props.isCentered ? 'center' : null,
    'with-label': !!props.label
  })

  // Render
  return (
    <ul
      data-content="connect-buttons"
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
              color={props.isIconColored ? null : rgbColor(item.color)}>
              <Icon
                name={slug(item.name)}
                color={props.isIconColored ? rgbColor(item.color) : null}
                className="icon" />
            </Card>
          </Link>
        </li>
      )}
    </ul>
  )
}

// Properties
ConnectButtons.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isCentered: PropTypes.bool,
  isIconColored: PropTypes.bool,
  label: PropTypes.string
}

// Export
export default ConnectButtons
