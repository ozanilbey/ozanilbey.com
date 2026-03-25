// Constants
import { COLORS, THEMES } from '@source/constants/options'
import { DEFAULT_COLOR, DEFAULT_THEME } from '@source/constants/settings'

// Helpers
import { checkIfClient } from '@source/helpers/document'

// Helper: System > Calculate color extremity
function calculateColorExtremity (rgb) {
  const lightness = rgb.reduce((accumulator, current) => accumulator + current) / (255 * 3)
  if (lightness < 0.225) return 'dark'
  else if (lightness > 0.75) return 'light'
  return
}

// Helper: System > Get color
function getColor () {
  let color
  if (checkIfClient()) color = window.localStorage.getItem('color')
  if (!COLORS.includes(color)) return DEFAULT_COLOR
  return color
}

// Helper: System > Get theme
function getTheme () {
  let theme = DEFAULT_THEME
  if (checkIfClient()) {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme && THEMES.includes(storedTheme)) theme = storedTheme
    else {
      const otherTheme = THEMES.find(option => option !== theme)
      const isOtherThemePreferred = window.matchMedia(`(prefers-color-scheme: ${otherTheme})`).matches
      theme = isOtherThemePreferred ? otherTheme : theme
    }
  }
  if (!THEMES.includes(theme)) return DEFAULT_THEME
  return theme
}

// Export
export {
  calculateColorExtremity,
  getColor,
  getTheme
}
