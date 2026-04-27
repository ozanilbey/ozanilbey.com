// Modules
import PropTypes from 'prop-types'

// Document
function Document ({ children, stylesheets = [] }) {
  // Render
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {stylesheets.map(stylesheet =>
          <link
            key={stylesheet}
            rel="stylesheet"
            href={stylesheet} />
        )}
      </head>
      <body>
        <div id="application">
          {children}
        </div>
      </body>
    </html>
  )
}

// Properties
Document.propTypes = {
  children: PropTypes.node.isRequired,
  stylesheets: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
}

// Export
export default Document
