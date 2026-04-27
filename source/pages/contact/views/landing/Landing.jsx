// Modules
import { useCallback, useState } from 'react'

// Sections
import Booking from './sections/booking/Booking'
import Form from './sections/form/Form'

// Panels
import Calendar from './panels/calendar/Calendar'

// Components
import Meta from '@source/components/utility/meta/Meta'
import Page from '@source/components/layout/page/Page'

// Styles
import './Landing.scss'

// View: Contact > Landing
function Landing () {
  // State
  const [isBooking, setIsBooking] = useState(false)

  // Data (Memoized)
  const close = useCallback(() => setIsBooking(false), [])

  // Render
  return (
    <Page.View name="landing">
      <Meta page="contact" />
      <Booking
        isActive={isBooking}
        onStart={() => setIsBooking(true)} />
      <Form />
      <Calendar
        isOpen={isBooking}
        onClose={close} />
    </Page.View>
  )
}

// Export
export default Landing
