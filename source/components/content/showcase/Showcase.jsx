// Modules
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Link from '@source/components/interface/link/Link'
import Notice from './components/notice/Notice'
import WorkCard from '@source/components/content/work-card/WorkCard'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Showcase.scss'

// Functions (Local)
function getSortedList (data) {
  return data?.sort((x, y) => {
    return (x.isFeatured === y.isFeatured)
      ? 0
      : x ? -1 : 1
  })
}

// Component: Content > Showcase
function Showcase ({ className, data, reference, style, ...rest }) {
  // State
  const [list, setList] = useState(getSortedList(data))

  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Effects
  useEffect(() => {
    setList(getSortedList(data))
  }, [data])

  // Render
  return (
    <div
      {...attributes}
      ref={reference}
      className={className}
      data-content="showcase"
      style={style}>
      <Notice className="notice" />
      {list?.length > 0
        ? list.map((item, index) =>
          <Link
            key={item.slug}
            className="link"
            to={`/works/${item.slug}`}>
            <WorkCard
              data={item}
              index={index}
              layout="horizontal"
              className="work-card"
              willFade={index < list.length - 1} />
          </Link>
        )
        : <p>There isn't any work matching the criteria.</p>
      }
    </div>
  )
}

// Properties
Showcase.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  reference: PropTypes.object,
  style: PropTypes.object
}

// Export
export default Showcase
