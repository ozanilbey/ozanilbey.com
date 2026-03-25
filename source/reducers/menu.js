// Constants (Local)
const ACTION_GROUP_NAME = 'MENU'

// Constants (Local)
const MENU_ACTIONS = Object.freeze({
  ACTIVATE: `ACTIVATE_${ACTION_GROUP_NAME}`,
  DEACTIVATE: `DEACTIVATE_${ACTION_GROUP_NAME}`,
  TOGGLE: `TOGGLE_${ACTION_GROUP_NAME}`
})

// Reducer: Menu
function menu (state, action) {
  // Actions
  switch (action.type) {
    // Action: Activate menu
    case MENU_ACTIONS.ACTIVATE:
      return {
        ...state,
        menu: { isActive: true }
      }
    // Action: Deactivate menu
    case MENU_ACTIONS.DEACTIVATE:
      return {
        ...state,
        menu: { isActive: false }
      }
    // Action: Toggle menu
    case MENU_ACTIONS.TOGGLE:
      return {
        ...state,
        menu: { isActive: !state.menu.isActive }
      }
    // Fallback
    default:
      return state
  }
}

// Export
export default menu
export {
  MENU_ACTIONS
}
