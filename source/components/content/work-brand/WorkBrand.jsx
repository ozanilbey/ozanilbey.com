// Modules
import { useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import ColorFill from '@source/components/model/color-fill/ColorFill'
import Media from '@source/components/interface/media/Media'

// Hooks
import useUnitSize from '@source/hooks/useUnitSize'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Utilities
import { rgbColor } from '@source/utilities/format'

// Styles
import './WorkBrand.scss'

// Component: Content > Work brand
function WorkBrand ({ className, data, isCentered, style, ...rest }) {
  // References
  const container = useRef()

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])
  const unitSize = useUnitSize(container, width => width / 5)

  // Render
  return (
    <div
      {...attributes}
      ref={container}
      data-content="work-brand"
      className={getClassName(className, { centered: isCentered })}
      style={{
        ...style,
        fontSize: `${unitSize / 100}em`
      }}>
      {unitSize > 0 && data.type !== 'collection' &&
        <ColorFill
          color={data.colors.secondary}
          width={Math.floor(2 * unitSize)}>
          <Media
            type="image"
            height={Math.floor(unitSize / 16 * 9)}
            width={Math.floor(2 * unitSize)}
            source={`/${data.slug}/logo.png`} />
        </ColorFill>
      }
      <strong
        className="label"
        style={{ color: rgbColor(data.colors.secondary) }}>
        {data.label || (data.output + (data.attribute ? `: ${data.attribute}` : ''))}
      </strong>
    </div>
  )
}

// Properties
WorkBrand.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  style: PropTypes.object
}

// Export
export default WorkBrand
