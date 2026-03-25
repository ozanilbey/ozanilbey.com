// Modules
import { useCallback, useContext } from 'react'

// Context
import Data from '@source/context/Data'
import Dispatch from '@source/context/Dispatch'

// Reducers
import { THEME_ACTIONS } from '@source/reducers/theme'

// Hook: Theme
function useTheme () {
  // Data
  const { theme: current } = useContext(Data)
  const dispatch = useContext(Dispatch)

  // Functions (Memoized)
  const set = useCallback(theme => dispatch({ payload: theme, type: THEME_ACTIONS.SET }), [])
  const toggle = useCallback(() => dispatch({ type: THEME_ACTIONS.TOGGLE }), [])

  // Response
  return {
    current,
    set,
    toggle
  }
}

// Export
export default useTheme
