// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Component: Interface > Icon Star (Shape)
const Star = props => (
  <svg
    viewBox="0 0 20 19"
    data-interface="icon"
    data-icon={props.name}
    className={props.className}>
    <path
      fill={props.color || ''}
      d="M19.5799419,8.45689652 C20.3756144,7.75761826 19.9777781,6.44647151 18.9168815,6.35906173 L14.0102347,5.9657177 C13.5681944,5.92201281 13.1703582,5.65978346 12.9935421,5.22273455 L11.092769,0.721130711 C10.6949328,-0.240376904 9.28040398,-0.240376904 8.88256775,0.721130711 L6.98179465,5.22273455 C6.80497855,5.61607857 6.40714232,5.92201281 5.96510206,5.9657177 L1.10265926,6.40276662 C0.0417626463,6.4901764 -0.400277609,7.80132315 0.439598876,8.50060141 L4.15273702,11.6473536 C4.50636922,11.9532879 4.6389813,12.3903368 4.55057325,12.8273857 L3.40126858,17.547514 C3.13604443,18.5527265 4.28534909,19.3831194 5.1694296,18.8149558 L9.36881203,16.2800721 C9.76664826,16.0615477 10.2528925,16.0615477 10.6065247,16.2800721 L14.8059072,18.8149558 C15.7341917,19.3831194 16.8392923,18.5527265 16.5740682,17.547514 L15.4247635,12.8273857 C15.3363555,12.3903368 15.4689675,11.9532879 15.8225998,11.6473536 L19.5799419,8.45689652 Z" />
  </svg>
)

// Properties
Star.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string
}

// Export
export default Star
