// Modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '~/components/interface/link/Link'
import Card from '~/components/interface/card/Card'
import WorkBrand from '~/components/content/work-brand/WorkBrand'
import WorkCover from '~/components/content/work-cover/WorkCover'

// Utilities
import { slug, rgbColor } from '~/utilities/format'

// Style
import './Showcase.less'

// Component: Content > Showcase
function Showcase (props) {
  // State
  const [list, setList] = useState([])

  // Effects
  useEffect(() => {
    function sortItems () {
      return props.data.sort((x, y) => {
        return (x.isFeatured === y.isFeatured)
          ? 0
          : x ? -1 : 1
      })
    }
    setList(sortItems(props.data))
  }, [props.data])

  // Render
  return (
    <div data-content="showcase">
      {list.map(item =>
        <Link
          key={item.slug}
          to={`/works/${item.slug}`}>
          <Card
            isCustom
            layout="horizontal"
            color={rgbColor(item.colors.primary)}>
            <div className="visual">
              <WorkCover
                types={item.preview.map(item => slug(item))}
                data={item} />
            </div>
            <div className="content">
              <WorkBrand data={item} />
              <div
                className="text"
                style={{ color: item.colors.secondary && rgbColor(item.colors.secondary) }}>
                <ul className="description">
                  {item.type === 'project' && <li data-label="Description">{item.description}</li>}
                  {item.client && <li data-label="Client">{item.client.fullName || item.client.name}</li>}
                  <li data-label="Year">
                    {typeof item.year === 'number' ? item.year : item.year.join('–')}
                  </li>
                </ul>
              </div>
              {item.tags &&
                <ul className="tags">
                  {item.tags.map((tag, index) =>
                    <li key={index}>{tag}</li>
                  )}
                </ul>
              }
            </div>
          </Card>
        </Link>
      )}
    </div>
  )
}

// Properties
Showcase.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
}

// Export
export default Showcase
