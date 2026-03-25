// Modules
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDarkTheme from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
import oneLightTheme from 'react-syntax-highlighter/dist/esm/styles/prism/one-light'
import PropTypes from 'prop-types'

// Hooks
import useTheme from '@source/hooks/useTheme'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Code.scss'

// Component: Presentation > Code
function Code ({ children, className, label, language, style, ...rest }) {
  // Data
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Data
  const { current: theme } = useTheme()

  // Render
  return (
    <div
      {...attributes}
      className={className}
      data-presentation="code"
      style={style}>
      {label && <strong className="label">{label}</strong>}
      <SyntaxHighlighter
        showLineNumbers
        className="code"
        language={language || null}
        style={theme === 'dark' ? oneDarkTheme : oneLightTheme}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

// Properties
Code.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Code
