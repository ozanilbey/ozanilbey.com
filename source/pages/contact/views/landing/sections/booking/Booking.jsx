// Modules
import PropTypes from 'prop-types'

// Components
import Content from '@source/components/layout/content/Content'
import Headline from '@source/components/model/headline/Headline'
import Link from '@source/components/interface/link/Link'
import Page from '@source/components/layout/page/Page'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Booking.scss'

// Section: Contact > Landing > Booking (Header)
function Booking ({ className, onStart, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  return (
    <Page.Header
      name="booking"
      {...attributes}
      className={className}
      style={style}>
      <Content>
        <Headline displaySize="biggest">
          Ready to ship?
          <br />
          Start a conversation.
        </Headline>
        <p className="lead">From <strong>product discovery</strong> to <strong>production-ready experiences</strong>, I work with companies and founders to ship products that create real impact. If you are looking for <strong>hands-on product engineering</strong> or <strong>engineering leadership</strong>, let’s talk.</p>
        <ul className="actions">
          <li className="action primary">
            <Link
              variant="button"
              onClick={onStart}>
              Book a meeting
            </Link>
          </li>
          <li className="action secondary">
            <Link
              isReverse
              to="#form"
              arrow="down"
              style={{ gap: '.5rem', opacity: 0.25 }}>
              Send a message
            </Link>
          </li>
        </ul>
      </Content>
    </Page.Header>
  )
}

// Properties
Booking.propTypes = {
  className: PropTypes.string,
  onStart: PropTypes.func.isRequired,
  style: PropTypes.object
}

// Export
export default Booking
