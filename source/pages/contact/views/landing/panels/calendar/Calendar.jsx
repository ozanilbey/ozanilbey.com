// Modules
import { useEffect, useMemo, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import PropTypes from 'prop-types'

// Components
import Page from '@source/components/layout/page/Page'

// Helpers
import { getAttributes, getClassName } from '@source/helpers/component'

// Styles
import './Calendar.scss'

// Panel: Contact > Landing > Calendar
function Calendar ({ className, isOpen = false, onClose, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // State
  const [isLoading, setIsLoading] = useState(true)

  // Data (Memoized)
  const calendlySettings = useMemo(() => ({ hideEventTypeDetails: true }), [])

  // Effects
  useEffect(() => {
    setIsLoading(true)
    if (isOpen) setTimeout(() => setIsLoading(false), 3000)
  }, [isOpen])

  // Render
  return (
    <Page.Panel
      {...attributes}
      name="calendar"
      isOpen={isOpen}
      data-theme="light"
      hasSpacing={false}
      className={className}
      onClose={onClose}
      style={style}>
      <div
        className={getClassName('wrapper', { loading: isLoading })}>
        <div className="loader" />
        <InlineWidget
          pageSettings={calendlySettings}
          className="widget calendly-inline-widget"
          url="https://calendly.com/ozanilbey/15-minutes" />
      </div>
    </Page.Panel>
  )
}

// Properties
Calendar.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object
}

// Export
export default Calendar
