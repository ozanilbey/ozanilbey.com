// Modules
import React from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Content: Work Summary > Girişimcilik Kongresi Visuals (Item)
const GirisimcilikKongresiVisuals = () => (
  <>
    <Container isBlockLayout>
      <Media type="image" width={864} source="/girisimcilik-kongresi-visuals/teaser.png" />
      <p className="lead">Girişimcilik Kongresi is an <strong>entrepreneurship congress</strong> held by ODTÜ GGT (Young Entrepreneurs Society). Its mission is to make essential conversations happen related to the entrepreneurial ecosystem in Turkey and around the globe.</p>
      <p className="lead">I had designed a set of promotional visuals for ODTÜ GGT <strong>in 2012</strong>: A poster, a leaflet, an invitation card, a billboard advertisement, a certificate, a ticket, roll-ups, and staff cards.</p>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Poster</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/01.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Leaflet</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/02.png" />
    </Container>
    <Container isBlockLayout>
      <small>Outside</small>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/03.png" />
      <small>Inside</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Invitation</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/04.png" />
    </Container>
    <Container isBlockLayout>
      <small>Front</small>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/05.png" />
      <small>Back</small>
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Billboard</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/06.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Certificate</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/07.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Roll Up</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/08.png" />
    </Container>
    <Container isBlockLayout>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/09.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Ticket</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/10.png" />
    </Container>
    <Container isBlockLayout>
      <Heading rank={2}>Staff & Participant Cards</Heading>
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/11.png" />
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/12.png" />
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/13.png" />
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/14.png" />
      <Media type="image" width={1152} source="/girisimcilik-kongresi-visuals/15.png" />
    </Container>
  </>
)

// Export
export default GirisimcilikKongresiVisuals
