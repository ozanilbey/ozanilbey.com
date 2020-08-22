// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Shape: Exit
const Exit = props => (
  <svg
    viewBox="0 0 18 18"
    className={`${props.name} icon`}>
    <path
      fill={props.color}
      d="M15.3652063,0.509012406 C16.0042461,-0.130027344 16.9971639,-0.173197684 17.5829503,0.412588754 C18.1342787,0.963917166 18.128469,1.8758879 17.5931062,2.51404245 L17.4865267,2.63033275 L11.118,8.998 L17.49,15.37 C18.1290398,16.0090398 18.1657864,16.9942136 17.58,17.58 C16.9942136,18.1657864 16.0090398,18.1290398 15.37,17.49 L8.997,11.118 L2.62553909,17.49 C2.02408991,18.0914492 1.11603063,18.1593792 0.52290731,17.6769159 L0.415539088,17.58 C-0.135789324,17.0286716 -0.135669708,16.1235606 0.399023664,15.4862131 L0.505539088,15.37 L6.877,8.998 L0.509012406,2.63033275 C-0.130027344,1.991293 -0.173197684,0.998375192 0.412588754,0.412588754 C0.998375192,-0.173197684 1.991293,-0.130027344 2.63033275,0.509012406 L8.998,6.877 L15.3652063,0.509012406 Z" />
  </svg>
)

Exit.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

// Export
export default Exit