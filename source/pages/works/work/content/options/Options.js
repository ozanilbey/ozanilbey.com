// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'
import Link from '~/components/interface/link/Link'
import Icon from '~/components/interface/icon/Icon'

// Helpers
import { checkIfClient } from '~/helpers/document'
import { getWorkTitle } from '~/helpers/content'

// Utilities
import { slug } from '~/utilities/format'

// Data
import sharingOptions from '~/data/sharingOptions'

// Style
import './Options.less'

// Subcontent: Work > Options
function Options (props) {
  // Render
  return (
    <Page.Footer
      name="options"
      data-content="options">
      <Container>
        <Stack willWrap>
          <Stack.Item
            sizeS={12}
            sizeM={props.recommendation ? 6 : 12}>
            <div className="wrapper">
              <strong className="title">Share project</strong>
              <ul className="content">
                {sharingOptions.map(option =>
                  <Link
                    key={slug(option.name)}
                    isArrowHidden
                    type="external"
                    href={option.link.replace(
                      'LINK',
                      checkIfClient() ? window.location.href : '' // Link
                    ).replace(
                      'MESSAGE',
                      props.label // Message
                    )}>
                    <Icon
                      name={slug(option.name)}
                      className="icon" />
                  </Link>
                )}
              </ul>
            </div>
          </Stack.Item>
          {props.recommendation &&
            <Stack.Item
              sizeS={12}
              sizeM={6}>
              <Link
                type="cta"
                to={`/works/${props.recommendation.slug}`}>
                <strong className="title">Next project</strong>
                <span className="content">{getWorkTitle(props.recommendation)}</span>
              </Link>
            </Stack.Item>
          }
        </Stack>
      </Container>
    </Page.Footer>
  )
}

Options.propTypes = {
  recommendation: PropTypes.object,
  label: PropTypes.string
}

// Export
export default Options
