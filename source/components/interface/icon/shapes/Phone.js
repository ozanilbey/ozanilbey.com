// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Icon > Phone (Shape)
const Phone = props => (
  <svg
    {...props}
    viewBox="0 0 14 13">
    <path
      fill={props['data-color']}
      d="M13.2896815,9.25281861 C12.9452341,9.08042965 11.2517505,8.24723839 10.9359905,8.13215819 C10.6202967,8.01721019 10.390665,7.95983533 10.1610334,8.30454715 C9.93140183,8.64932506 9.27126053,9.42527367 9.07031634,9.65516967 C8.86943826,9.88499958 8.66849408,9.91388531 8.32404666,9.74136415 C7.97959925,9.5689752 6.86971314,9.20529267 5.55405755,8.0316861 C4.53010152,7.11831547 3.83876099,5.99038404 3.63788291,5.64554003 C3.43693872,5.30069602 3.61640039,5.11429385 3.78885544,4.94256589 C3.94386008,4.78822225 4.13336896,4.54021483 4.30555961,4.33907234 C4.47781637,4.13799596 4.53519122,3.99422833 4.65000703,3.76446452 C4.76482283,3.53450241 4.70744798,3.33342603 4.6212535,3.16103707 C4.53519122,2.98864812 3.8462964,1.29311548 3.55928993,0.603361348 C3.27968668,-0.068215262 2.99572082,0.0227384207 2.78426673,0.012096311 C2.58358695,0.00211520192 2.35369094,0 2.12412543,0 C1.89449382,0 1.52129288,0.0861944783 1.2055329,0.430972392 C0.889839009,0.775816405 0,1.60920596 0,3.3045403 C0,5.00007294 1.23422032,6.63790023 1.40647708,6.86779624 C1.57873383,7.09775835 3.83532379,10.5768689 7.29077053,12.0688795 C8.11252647,12.4238368 8.75415976,12.6357536 9.25440501,12.7944598 C10.0795321,13.0566788 10.8304287,13.0196627 11.4239412,12.9309565 C12.085735,12.8321369 13.4618721,12.0977652 13.7489447,11.2931953 C14.0359512,10.488427 14.0359512,9.7988051 13.9498228,9.65516967 C13.8637605,9.51146814 13.6341289,9.42527367 13.2896815,9.25281861" />
  </svg>
)

// Properties
Phone.propTypes = {
  'data-color': PropTypes.string
}

// Export
export default Phone
