// Reducers
import color from './color'
import menu from './menu'
import theme from './theme'

// Functions (Local)
function reduceReducers (...reducers) {
  return (previousState, value, ...rest) => reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...rest),
    previousState
  )
}

// Reducer
const reducer = reduceReducers(
  color,
  menu,
  theme
)

// Export
export default reducer
