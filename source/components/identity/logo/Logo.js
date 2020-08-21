// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Style
import './Logo.less'

// Identity: Logo
const Logo = props => (
  <svg
    data-identity="logo"
    viewBox="0 0 23 5">
    <path
      fill={props.color}
      d="M22.7878079,1.18594994 C22.9050933,1.18594994 23.0000665,1.28060589 23.0000665,1.39756166 C23.0000665,1.4309418 22.9888965,1.46991778 22.9777264,1.50332576 L21.8493016,4.18710029 L21.8341841,4.22239213 C21.5866851,4.79144733 21.3098989,5 20.8828981,5 C20.6929517,5 20.5532983,4.96659202 20.4080599,4.91648005 C20.3410397,4.88864006 20.2739916,4.83296009 20.2739916,4.73273615 C20.2739916,4.62694421 20.3633519,4.54899225 20.458353,4.54899225 C20.4903399,4.54899225 20.5185881,4.55644692 20.5461718,4.56527224 L20.5812699,4.57678053 C20.6597183,4.60199908 20.7417573,4.62137621 20.8773131,4.62137621 C21.1454498,4.62137621 21.3018582,4.45993214 21.4582666,4.10912049 L21.4806067,4.06457651 L20.2739916,1.51446176 C20.2572365,1.47548578 20.2460665,1.4365098 20.2460665,1.39756166 C20.2460665,1.28060589 20.3410397,1.18594994 20.463938,1.18594994 C20.5812234,1.18594994 20.6426865,1.25836174 20.6817816,1.35298985 L21.6873082,3.61356876 L22.5810785,1.34742185 C22.6146165,1.25836174 22.6760796,1.18594994 22.7878079,1.18594994 Z M1.50299725,1.15391168 C2.36581406,1.15391168 3.00042651,1.83287323 3.00042651,2.64541102 L3.00042651,2.65654702 C3.00042651,3.46911265 2.3602739,4.15921019 1.49186126,4.15921019 C0.629044454,4.15921019 0,3.48024864 0,2.66768301 L0,2.65654702 C0,1.84400923 0.634612451,1.15391168 1.50299725,1.15391168 Z M18.7152487,1.15390333 C19.5669296,1.15390333 20.0512339,1.84956887 20.0512339,2.61202253 C20.0512339,2.72892263 19.9566058,2.8123869 19.8508139,2.8123869 L17.768912,2.8123869 C17.8301321,3.43572416 18.2699203,3.78631308 18.7820369,3.78631308 C19.1383051,3.78631308 19.3999453,3.64719668 19.6114735,3.45240031 C19.6448815,3.42458816 19.6838296,3.40231618 19.7339416,3.40231618 C19.8397057,3.40231618 19.9231978,3.48578045 19.9231978,3.58597655 C19.9231978,3.63606069 19.9009258,3.68617266 19.8563819,3.7251208 C19.5836335,3.98670529 19.2607732,4.15920184 18.7709009,4.15920184 C17.9804402,4.15920184 17.3347196,3.55259641 17.3347196,2.6621345 L17.3347196,2.65099851 C17.3347196,1.82175673 17.9191922,1.15390333 18.7152487,1.15390333 Z M14.2774021,8.3519954e-06 C14.3999258,8.3519954e-06 14.4946096,0.0946642999 14.4946096,0.217160232 L14.4946096,1.79287553 C14.7285212,1.44765972 15.0682247,1.15255588 15.5973236,1.15255588 C16.2878666,1.15255588 16.9728972,1.69821958 16.9728972,2.64475122 L16.9728972,2.65588721 C16.9728972,3.59687869 16.2934346,4.15367839 15.5973236,4.15367839 C15.0626567,4.15367839 14.7173573,3.86414255 14.4946096,3.54119872 L14.4946096,3.90311852 C14.4946096,4.02004646 14.4054938,4.1202704 14.2829701,4.1202704 C14.1604463,4.1202704 14.0657903,4.02004646 14.0657903,3.90311852 L14.0657903,0.217160232 C14.0657903,0.0946642999 14.1604463,8.3519954e-06 14.2774021,8.3519954e-06 Z M7.15606483,1.17482508 C7.56261213,1.17482508 7.87447563,1.28061702 8.0861152,1.49220091 C8.28102293,1.6870808 8.38127471,1.96548065 8.38127471,2.3329406 L8.38127471,3.90868374 C8.38127471,4.03117967 8.29215892,4.12026762 8.17523099,4.12026762 C8.05270722,4.12026762 7.96915942,4.03117967 7.96915942,3.91981973 L7.96915942,3.65812387 C7.76868369,3.91981973 7.43452036,4.1536756 6.92772127,4.1536756 C6.39308221,4.1536756 5.85287515,3.84743577 5.85287515,3.2572281 L5.85287515,3.24611994 C5.85287515,2.63918044 6.35410623,2.31626445 7.08365303,2.31626445 C7.45122435,2.31626445 7.71297588,2.36637643 7.96915942,2.43876039 L7.96915942,2.33853644 C7.96915942,1.82071273 7.65170008,1.55344887 7.11152085,1.55344887 C6.82190149,1.55344887 6.57688179,1.62026484 6.36524222,1.71492078 C6.3373744,1.72605678 6.30953442,1.73162477 6.28726243,1.73162477 C6.18703848,1.73162477 6.09792269,1.64810482 6.09792269,1.54788088 C6.09792269,1.46149256 6.1555149,1.39604687 6.20980072,1.37185179 L6.21487847,1.36970497 C6.49890199,1.24720904 6.78849351,1.17482508 7.15606483,1.17482508 Z M13.2360641,0 C13.3585601,0 13.453216,0.100223945 13.453216,0.21715188 L13.453216,3.90311017 C13.453216,4.0256061 13.3641281,4.12026205 13.2416043,4.12026205 C13.1190805,4.12026205 13.0243967,4.0256061 13.0243967,3.90311017 L13.0243967,0.21715188 C13.0243967,0.100223945 13.1190805,0 13.2360641,0 Z M12.2058483,1.18595829 C12.3283442,1.18595829 12.4230002,1.28061424 12.4230002,1.40311017 L12.4230002,3.90311296 C12.4230002,4.02560889 12.3339122,4.12026484 12.2113884,4.12026484 C12.0888647,4.12026484 11.9941809,4.02560889 11.9941809,3.90311296 L11.9941809,1.40311017 C11.9941809,1.28618224 12.0888647,1.18595829 12.2058483,1.18595829 Z M10.3296226,1.15389776 C11.0254552,1.15389776 11.4318355,1.62138679 11.4318355,2.30594417 L11.4318355,3.90320761 C11.4318355,4.02564786 11.3372074,4.12027597 11.2202794,4.12027597 C11.0978113,4.12027597 11.0031832,4.02564786 11.0031832,3.90320761 L11.0031832,2.41168043 C11.0031832,1.87740329 10.7137309,1.54349051 10.2071545,1.54349051 C9.71174201,1.54349051 9.34433774,1.90521543 9.34433774,2.44506057 L9.34433774,3.90320761 C9.34433774,4.02564786 9.25524979,4.12027597 9.13280953,4.12027597 C9.01034144,4.12027597 8.91571333,4.02564786 8.91571333,3.90320761 L8.91571333,1.40434627 C8.91571333,1.28747401 9.01034144,1.18730575 9.12724154,1.18730575 C9.24970963,1.18730575 9.34433774,1.28190601 9.34433774,1.40434627 L9.34433774,1.7160149 C9.53359395,1.40434627 9.83418227,1.15389776 10.3296226,1.15389776 Z M5.44109393,1.21841136 C5.55785483,1.21841136 5.64683142,1.29622412 5.64683142,1.39074087 L5.64683142,1.40184902 C5.64683142,1.47412162 5.61901928,1.52971807 5.55785483,1.59642267 L3.73965327,3.73110918 L5.49115023,3.73110918 C5.59120713,3.73110918 5.67461572,3.81448993 5.67461572,3.90900668 C5.67461572,4.00903575 5.59120713,4.0924165 5.49115023,4.0924165 L3.36712643,4.0924165 C3.2559057,4.0924165 3.16138895,4.01460374 3.16138895,3.92008699 L3.16138895,3.90900668 C3.16138895,3.83670624 3.18920109,3.78113763 3.2503377,3.71440519 L5.06853926,1.57974652 L3.38934274,1.57974652 C3.289258,1.57974652 3.20587724,1.50193377 3.20587724,1.40184902 C3.20587724,1.30179212 3.289258,1.21841136 3.38934274,1.21841136 L5.44109393,1.21841136 Z M7.12822484,2.63361244 C6.58798994,2.63361244 6.28726243,2.86749615 6.28726243,3.22938811 L6.28726243,3.2405241 C6.28726243,3.60244391 6.62142576,3.81402779 7.01126907,3.81402779 C7.54034014,3.81402779 7.97472742,3.49108397 7.97472742,3.03453606 L7.97472742,2.75613621 C7.76308786,2.69488824 7.47906433,2.63361244 7.12822484,2.63361244 Z M1.49186126,1.5323406 C0.868412642,1.5323406 0.439788238,2.0388056 0.439788238,2.64541102 L0.439788238,2.65654702 C0.439788238,3.27434412 0.896224787,3.77521328 1.50299725,3.77521328 C2.12647371,3.77521328 2.56066611,3.27434412 2.56066611,2.66768301 L2.56066611,2.65654702 C2.56066611,2.0388056 2.09863372,1.5323406 1.49186126,1.5323406 Z M15.5193438,1.53674767 C14.9847047,1.53674767 14.4779056,1.98775542 14.4779056,2.64475122 L14.4779056,2.65588721 C14.4779056,3.32404684 14.9847047,3.7694866 15.5193438,3.7694866 C16.0762548,3.7694866 16.5329141,3.35745482 16.5329141,2.66145521 L16.5329141,2.65031921 C16.5329141,1.97105143 16.065091,1.53674767 15.5193438,1.53674767 Z M18.7041127,1.51565609 C18.2031044,1.51565609 17.8245919,1.93306098 17.768912,2.49515027 L19.6226095,2.49515027 C19.5780655,1.97200912 19.2774772,1.51565609 18.7041127,1.51565609 Z M12.2058483,0.083522738 C12.3506162,0.083522738 12.462004,0.172610689 12.462004,0.311810612 L12.462004,0.384194573 C12.462004,0.517826499 12.3506162,0.612482447 12.2058483,0.612482447 C12.0665927,0.612482447 11.9552327,0.517826499 11.9552327,0.384194573 L11.9552327,0.311810612 C11.9552327,0.172610689 12.0665927,0.083522738 12.2058483,0.083522738 Z" />
  </svg>
)

Logo.propTypes = {
  color: PropTypes.string
}

// Export
export default Logo
