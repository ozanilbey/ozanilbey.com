// Modules
import { useCallback, useContext } from 'react'

// Context
import Data from '@source/context/Data'
import Dispatch from '@source/context/Dispatch'

// Reducers
import { MENU_ACTIONS } from '@source/reducers/menu'

// Hook: Menu
function useMenu () {
  // Data
  const { menu: { isActive = false } = {} } = useContext(Data)
  const dispatch = useContext(Dispatch)

  // Functions (Memoized)
  const activate = useCallback(() => dispatch({ type: MENU_ACTIONS.ACTIVATE }), [])
  const deactivate = useCallback(() => dispatch({ type: MENU_ACTIONS.DEACTIVATE }), [])
  const toggle = useCallback(() => dispatch({ type: MENU_ACTIONS.TOGGLE }), [])

  // Response
  return {
    activate,
    deactivate,
    isActive,
    toggle
  }
}

// Export
export default useMenu
