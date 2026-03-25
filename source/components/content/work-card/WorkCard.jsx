// Modules
import { useRef } from 'react'
import PropTypes from 'prop-types'

// Components
import WorkCover from '@source/components/content/work-cover/WorkCover'
import WorkBrand from '@source/components/content/work-brand/WorkBrand'

// Hooks
import useDimensions from '@source/hooks/useDimensions'
import useFade from '@source/hooks/useFade'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Utilities
import { rgbaColor, rgbColor, slug } from '@source/utilities/format'

// Styles
import './WorkCard.scss'

// Component: Content > Work card
function WorkCard ({ className, data, layout, style, willFade, ...rest }) {
  // References
  const card = useRef()

  // Data
  const { isMobile } = useDimensions()
  const attributes = getAttributes(rest, ['aria', 'data'])
  const { styles: fadingStyles = {} } = useFade(card.current)

  // Render
  return (
    <div
      ref={card}
      {...attributes}
      data-work={data.slug}
      data-content="work-card"
      className={getClassName(className, { blurred: true, colored: true, layout })}
      style={{
        ...style,
        '--brand-color': rgbColor(data.colors.primary),
        '--brand-tone-color': rgbaColor([...data.colors.primary, 0.125]),
        color: rgbColor(data.colors.secondary),
        ...(willFade ? fadingStyles : {})
      }}>
      <div className="visual">
        <WorkCover
          data={data}
          className="work-cover"
          types={data.preview.map(item => slug(item))} />
      </div>
      <div className="content">
        <WorkBrand
          data={data}
          isCentered={isMobile}
          className="work-brand" />
        <div className="summary">
          {data.type === 'project' && <p className="description">{data.description}</p>}
          {data.client &&
            <p
              className="client"
              data-text-label="Client">
              {data.client.fullName || data.client.name}
            </p>
          }
          <p
            className="year"
            data-text-label="Year">
            {typeof data.year === 'number' ? data.year : data.year.join('–')}
          </p>
        </div>
        {data.tags &&
          <ul className="tags">
            {data.tags.map((tag, index) =>
              <li
                key={index}
                className="tag">
                {tag}
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  )
}

// Properties
WorkCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  layout: PropTypes.oneOf(
    ['horizontal', 'vertical']
  ),
  style: PropTypes.object,
  willFade: PropTypes.bool
}

// Export
export default WorkCard
