// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Stack from '~/components/layout/stack/Stack'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Layout.less'

// Page: Features > Layout
function Layout () {
  // Render
  return (
    <Page
      name="layout"
      parentName="features">
      <Helmet>
        <title>Isomorphic | Layout</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Layout</Heading>
          <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
        </Container>
      </Page.Header>
      <Page.Section name="stack-vertical-alignment">
        <Container>
          <Heading rank={2}>Stack alignment - Vertical</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Top</Heading>
          <Stack vertical="top">
            <Stack.Item>
              <div>Aligned to top</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to top</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to top</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Middle</Heading>
          <Stack vertical="middle">
            <Stack.Item>
              <div>Aligned to middle</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to middle</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to middle</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Bottom</Heading>
          <Stack vertical="bottom">
            <Stack.Item>
              <div>Aligned to bottom</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to bottom</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Aligned to bottom</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Stretch</Heading>
          <Stack vertical="stretch">
            <Stack.Item>
              <div>Stretched to top and bottom</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Stretched to top and bottom</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Stack.Item>
            <Stack.Item>
              <div>Stretched to top and bottom</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
      <Page.Section name="stack-horizontal-alignment">
        <Container>
          <Heading rank={2}>Stack alignment - Horizontal</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Start</Heading>
          <Stack horizontal="left">
            <Stack.Item size={3}>
              <div>Justified to start</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Justified to start</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Justified to start</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Center</Heading>
          <Stack horizontal="center">
            <Stack.Item size={3}>
              <div>Stacked center</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Stacked center</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Stacked center</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>End</Heading>
          <Stack horizontal="right">
            <Stack.Item size={3}>
              <div>Stacked right</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Stacked right</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Stacked right</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Equal</Heading>
          <Stack horizontal="equal">
            <Stack.Item size={3}>
              <div>Equal-spaced</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Equal-spaced</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>Equal-spaced</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
      <Page.Section name="stack-spacing">
        <Container>
          <Heading rank={2}>Stack spacing</Heading>
        </Container>
        <Container>
          <Heading rank={3}>None</Heading>
          <Stack spacing="none">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>X-Small</Heading>
          <Stack spacing="xsmall">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Small</Heading>
          <Stack spacing="small">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Medium</Heading>
          <Stack spacing="medium">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>Large</Heading>
          <Stack spacing="large">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>X-Large</Heading>
          <Stack spacing="xlarge">
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
            <Stack.Item>
              <div>Item</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
      <Page.Section name="item-size">
        <Container>
          <Heading rank={2}>Item size</Heading>
        </Container>
        <Container>
          <Heading rank={3}>4 + 4 + 4</Heading>
          <Stack>
            <Stack.Item size={4}>
              <div>4X item</div>
            </Stack.Item>
            <Stack.Item size={4}>
              <div>4X item</div>
            </Stack.Item>
            <Stack.Item size={4}>
              <div>4X item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>3 + 6 + 3</Heading>
          <Stack>
            <Stack.Item size={3}>
              <div>3X item</div>
            </Stack.Item>
            <Stack.Item size={6}>
              <div>6X item</div>
            </Stack.Item>
            <Stack.Item size={3}>
              <div>3X item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>3 + 2 + auto</Heading>
          <Stack>
            <Stack.Item size={3}>
              <div>3X item</div>
            </Stack.Item>
            <Stack.Item size={2}>
              <div>2X item</div>
            </Stack.Item>
            <Stack.Item size="auto">
              <div>Auto-sized item</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>auto + auto + auto</Heading>
          <Stack>
            <Stack.Item size="auto">
              <div>Auto-sized item</div>
            </Stack.Item>
            <Stack.Item size="auto">
              <div>Auto-sized item</div>
            </Stack.Item>
            <Stack.Item size="auto">
              <div>Auto-sized item</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
      <Page.Section name="item-offset">
        <Container>
          <Heading rank={2}>Item offset</Heading>
        </Container>
        <Container>
          <Heading rank={3}>4 + 2 (offset) + 6</Heading>
          <Stack>
            <Stack.Item size={4}>
              <div>4X item</div>
            </Stack.Item>
            <Stack.Item size={6} offset={2}>
              <div>6X item with 2X offset</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>2 (offset) + 10</Heading>
          <Stack>
            <Stack.Item size={10} offset={2}>
              <div>10X item with 2X offset</div>
            </Stack.Item>
          </Stack>
        </Container>
        <Container>
          <Heading rank={3}>2 + 4 (offset) + auto</Heading>
          <Stack>
            <Stack.Item size={2}>
              <div>2X item</div>
            </Stack.Item>
            <Stack.Item size="auto" offset={4}>
              <div>Auto-sized item with 4X offset</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
      <Page.Section name="responsiveness">
        <Container>
          <Heading rank={2}>Responsiveness</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Variable item sizes</Heading>
          <p>Items below are 2X on x-large, 3X on large, 4X on medium, 6X on small, 12X on x-small.</p>
          <Stack willWrap>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
            <Stack.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Stack.Item>
          </Stack>
        </Container>
      </Page.Section>
    </Page>
  )
}

// Export
export default Layout
