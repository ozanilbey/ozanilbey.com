// Modules
import PropTypes from 'prop-types'

// Components
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Markdown from '@source/components/presentation/markdown/Markdown'

// Helpers
import { getAttributes } from '@source/helpers/component'
import { getMonthYearRange, sortMonthYearByDate } from '@source/helpers/content'

// Data
import experience from '@source/data/experience'

// Constants
import { EXPERIENCE_CONTRACT_TYPES } from '@source/constants/content'

// Styles
import './Contracts.scss'

// Component: Profile > Landing > Experience > Contracts
function Contracts ({ className, type, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <ul
      {...attributes}
      className={className}
      data-component="contracts"
      style={style}>
      {experience
        .filter(item => item.contract === type)
        .sort(sortMonthYearByDate)
        .map((item, index) =>
          <li
            key={index}
            className="contract">
            <Heading
              rank={6}
              isSingleLine
              className="name">
              {
                item.link
                  ? <Link
                    isExternal
                    arrow="upright"
                    className="link"
                    href={`//${item.link}`}>
                    {item.for}
                  </Link>
                  : item.for
              }
            </Heading>
            <p className="position">{item.role}</p>
            <p className="details">
              <span className="date">{getMonthYearRange(item)}</span>
              {item.location &&
                <span className="location">
                  {item.location}
                  <span className="mode">
                    {item.mode}
                  </span>
                </span>
              }
              {item.qualification && <span className="location">{item.qualification}</span>}
            </p>
            <p className="description">
              <Markdown>{item.description}</Markdown>
            </p>
          </li>
        )
      }
    </ul>
  )
}

// Properties
Contracts.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(
    EXPERIENCE_CONTRACT_TYPES
  ),
  style: PropTypes.object
}

// Export
export default Contracts
