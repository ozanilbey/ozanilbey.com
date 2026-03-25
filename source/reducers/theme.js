// Constants
import { THEMES } from '@source/constants/options'
import { DEFAULT_THEME } from '@source/constants/settings'

// Constants (Local)
const ACTION_GROUP_NAME = 'THEME'

// Constants (Local)
const THEME_ACTIONS = Object.freeze({
  SET: `SET_${ACTION_GROUP_NAME}`,
  TOGGLE: `TOGGLE_${ACTION_GROUP_NAME}`
})

// Reducer: Theme
function theme (state, action) {
  // Actions
  switch (action.type) {
    // Action: Set theme
    case THEME_ACTIONS.SET:
      if (!THEMES.includes(action.payload)) return state
      return {
        ...state,
        theme: action.payload || DEFAULT_THEME
      }
    // Action: Toggle theme
    case THEME_ACTIONS.TOGGLE:
      const otherTheme = THEMES.find(option => option !== state.theme)
      if (!otherTheme) return state
      return {
        ...state,
        theme: otherTheme
      }
    // Fallback
    default:
      return state
  }
}

// Export
export default theme
export {
  THEME_ACTIONS
}
