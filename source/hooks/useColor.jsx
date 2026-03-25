// Modules
import { useCallback, useContext } from 'react'

// Context
import Data from '@source/context/Data'
import Dispatch from '@source/context/Dispatch'

// Reducers
import { COLOR_ACTIONS } from '@source/reducers/color'

// Hook: Color
function useColor () {
  // Data
  const { color: current } = useContext(Data)
  const dispatch = useContext(Dispatch)

  // Functions (Memoized)
  const set = useCallback(color => dispatch({ payload: color, type: COLOR_ACTIONS.SET }), [])

  // Response
  return {
    current,
    set
  }
}

// Export
export default useColor
