// Constant: Layout > Alignment horizontal options
const ALIGNMENT_HORIZONTAL_OPTIONS = ['left', 'center', 'right']

// Constant: Layout > Alignment vertical options
const ALIGNMENT_VERTICAL_OPTIONS = ['top', 'middle', 'bottom']

// Constant: Layout > Box alignment horizontal options
const BOX_ALIGNMENT_HORIZONTAL_OPTIONS = [...ALIGNMENT_HORIZONTAL_OPTIONS, 'equal']

// Constant: Layout > Box alignment vertical options
const BOX_ALIGNMENT_VERTICAL_OPTIONS = [...ALIGNMENT_VERTICAL_OPTIONS, 'stretch']

// Constant: Layout > Limited size options
const LIMITED_SIZE_OPTIONS = ['small', 'medium', 'large']

// Constant: Layout > Size options
const SIZE_OPTIONS = ['xsmall', ...LIMITED_SIZE_OPTIONS, 'xlarge']

// Constant: Layout > Spacing options
const SPACING_OPTIONS = ['none', ...SIZE_OPTIONS]

// Export
export {
  ALIGNMENT_HORIZONTAL_OPTIONS,
  ALIGNMENT_VERTICAL_OPTIONS,
  BOX_ALIGNMENT_HORIZONTAL_OPTIONS,
  BOX_ALIGNMENT_VERTICAL_OPTIONS,
  LIMITED_SIZE_OPTIONS,
  SIZE_OPTIONS,
  SPACING_OPTIONS
}
