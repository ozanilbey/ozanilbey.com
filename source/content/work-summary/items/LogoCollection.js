// Modules
import React, { useContext } from 'react'

// Components
import Container from '~/components/layout/container/Container'
import Heading from '~/components/type/heading/Heading'
import Media from '~/components/content/media/Media'

// Context
import ControllerContext from '~/context/Controller'

// Content: Work Summary > Logo Collection (Item)
const LogoCollection = () => {
  // Data
  const { dimensions } = useContext(ControllerContext)

  // Methods
  const renderLogo = id => {
    const size = Math.min(dimensions.width / 3 * 2, 360)
    return (
      <Media
        type="image"
        className="monocolor"
        width={Math.ceil(size)}
        height={Math.ceil(size / 5 * 3)}
        source={`/logo-collection/logo-${id}.png`} />
    )
  }

  // Render
  return (
    <>
      <Container isBlockLayout>
        <p className="lead">I started designing logos as I was getting curious about it, back <strong>in 2007</strong>. After years of practice, I learned a lot about logo design and symbolism. I learned to convey the message through form instead of words. However, the logos I like the most are strictly typographic ones.</p>
        <p className="lead">Here are some of my works.</p>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2020</Heading>
        {renderLogo('go4pilates')}
        <small>
          GO4Pilates
          <i>Pilates Studio</i>
        </small>
        {renderLogo('xlstudio')}
        <small>
          XL Studio
          <i>Social Media Studio</i>
        </small>
        {renderLogo('filmxl')}
        {renderLogo('sozlukxl')}
        {renderLogo('takvimxl')}
        <small>
          XL
          <i>Social Accounts Family</i>
        </small>
        {renderLogo('socradar')}
        <small>
          SOCRadar (Revision)
          <i>Digital Risk Platform</i>
        </small>
        {renderLogo('mudavim')}
        <small>
          Müdavim
          <i>Customer Loyalty Application</i>
        </small>
        {renderLogo('base64ai')}
        <small>
          Base64.ai
          <i>Document Processing Platform</i>
        </small>
        <Heading rank={2}>2019</Heading>
        {renderLogo('docuai')}
        <small>
          Docu.ai
          <i>AI-powered Data Extraction</i>
        </small>
        {renderLogo('indexify')}
        <small>
          Indexify (x<sub>i</sub>)
          <i>Journal Organizer</i>
        </small>
        <Heading rank={2}>2018</Heading>
        {renderLogo('groups')}
        <small>
          Grou.ps
          <i>Privacy-focused Social Platform</i>
        </small>
        {renderLogo('graphjs')}
        {renderLogo('graphbuild')}
        {renderLogo('graphpress')}
        <small>
          Graph
          <i>Product Family</i>
        </small>
        <Heading rank={2}>2017</Heading>
        {renderLogo('monoevent')}
        <small>
          Mono Event
          <i>Event Planning Company</i>
        </small>
        {renderLogo('postmatik')}
        <small>
          Postmatik
          <i>Social Media Management Tool</i>
        </small>
        {renderLogo('fihrist')}
        <small>
          Fihrist
          <i>Text-only Reading Experience</i>
        </small>
        {renderLogo('brush')}
        <small>
          Brush
          <i>Product Marketplace for Artworks</i>
        </small>
        {renderLogo('earlybird')}
        <small>
          earlybird
          <i>Early-stage Product Announcements</i>
        </small>
        {renderLogo('popsouls')}
        <small>
          POPSouls
          <i>Online Celebrity Magazine</i>
        </small>
        <Heading rank={2}>2016</Heading>
        {renderLogo('flashtech')}
        <small>
          Flashtech
          <i>A Family of Applications</i>
        </small>
        {renderLogo('sprintvpn')}
        <small>
          SprintVPN
          <i>Pay-as-you-go VPN Service</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2015</Heading>
        {renderLogo('ikort')}
        <small>
          i-kort
          <i>Mobile Sports Application</i>
        </small>
        {renderLogo('odtumodatoplulugu')}
        <small>
          ODTÜ Moda Topluluğu
          <i>Fashion Club</i>
        </small>
        {renderLogo('moybox')}
        <small>
          MoyBox
          <i>Home Networking Device</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2014</Heading>
        {renderLogo('favogue')}
        <small>
          Favogue
          <i>Daily Fashion Inspiration</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2013</Heading>
        {renderLogo('semantica')}
        <small>
          Semantica
          <i>Tech Company</i>
        </small>
        {renderLogo('cardz')}
        <small>
          Cardz
          <i>Instant Business Cards & Websites</i>
        </small>
        {renderLogo('sosyalmetin')}
        <small>
          Sosyal Metin
          <i>Social Quotes Website</i>
        </small>
        {renderLogo('fraktalproje')}
        <small>
          Fraktal Proje
          <i>Design Company</i>
        </small>
        {renderLogo('national')}
        <small>
          National
          <i>Investment Consultancy</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2012</Heading>
        {renderLogo('orion')}
        <small>
          Orion
          <i>Art History Magazine</i>
        </small>
        {renderLogo('bora')}
        <small>
          Bora
          <i>Architecture & Planning</i>
        </small>
        {renderLogo('express')}
        <small>
          Express
          <i>Translation Services</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2011</Heading>
        {renderLogo('piccture')}
        <small>
          Piccture
          <i>Feedback Platform for Designers</i>
        </small>
        {renderLogo('maruf')}
        <small>
          Maruf YMM
          <i>Accounting Firm</i>
        </small>
        {renderLogo('ggt')}
        <small>
          ODTÜ GGT (Revision)
          <i>Young Entrepreneurs Society</i>
        </small>
        {renderLogo('toplumicinsehircilik')}
        <small>
          Toplum İçin Şehircilik
          <i>Urban Studies Society</i>
        </small>
        {renderLogo('esetron')}
        <small>
          Esetron
          <i>Smart Robotechnologies</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2010</Heading>
        {renderLogo('pmum')}
        <small>
          PMUM (Revision)
          <i>Energy Exchange Market</i>
        </small>
        {renderLogo('waplog')}
        <small>
          Waplog (U+I - You and I)
          <i>Online Dating Platform</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2009</Heading>
        {renderLogo('greenhouse')}
        <small>
          Greenhouse
          <i>Vegetarian Restaurant</i>
        </small>
        {renderLogo('sunshine')}
        <small>
          Sunshine
          <i>Cafe & Bistro</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2008</Heading>
        {renderLogo('cinemasociety')}
        <small>
          Sinema Topluluğu
          <i>Cinema Society</i>
        </small>
      </Container>
      <Container isBlockLayout>
        <Heading rank={2}>2007</Heading>
        {renderLogo('anlatokulunu')}
        <small>
          “Narrate Your School“
          <i>Preliminary Web Design Contest</i>
        </small>
      </Container>
    </>
  )
}

// Export
export default LogoCollection
