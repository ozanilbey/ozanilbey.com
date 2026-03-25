// Constants
import { COLORS } from '@source/constants/options'
import { DEFAULT_COLOR } from '@source/constants/settings'

// Constants (Local)
const ACTION_GROUP_NAME = 'COLOR'

// Constants (Local)
const COLOR_ACTIONS = Object.freeze({
  SET: `SET_${ACTION_GROUP_NAME}`
})

// Reducer: Color
function color (state, action) {
  // Actions
  switch (action.type) {
    // Action: Set color
    case COLOR_ACTIONS.SET:
      if (!COLORS.includes(action.payload)) return state
      return {
        ...state,
        color: action.payload || DEFAULT_COLOR
      }
    // Fallback
    default:
      return state
  }
}

// Export
export default color
export {
  COLOR_ACTIONS
}
