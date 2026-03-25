// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'
import Separator from '@source/components/layout/separator/Separator'

// Hooks
import useDimensions from '@source/hooks/useDimensions'

// Content: Works > Work > Body > Logo collection
function LogoCollection () {
  // Data
  const dimensions = useDimensions()

  // Functions
  function renderLogo (id) {
    const size = Math.min(dimensions.width / 3 * 2, 360)
    return (
      <Media
        isAdaptive
        type="image"
        width={Math.ceil(size)}
        className="media weak spaced"
        height={Math.ceil(size / 5 * 3)}
        source={`/logo-collection/logo-${id}.png`} />
    )
  }

  // Render
  return (
    <>
      <Content>
        <p className="lead">I started designing logos as I was getting curious about it, back <strong>in 2007</strong>. After years of practice, I learned a lot about logo design and symbolism. I learned to convey the message through form instead of words. However, the logos I like the most are strictly typographic ones.</p>
        <p className="lead">Here are some of my works.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          2020
        </Heading>
        {renderLogo('secfusion')}
        <small className="note">
          SecFusion
          <i className="detail">Unified Vulnerability Platform</i>
        </small>
        {renderLogo('agcurate')}
        <small className="note">
          Agcurate
          <i className="detail">Rural Intelligence Platform</i>
        </small>
        {renderLogo('go4pilates')}
        <small className="note">
          GO4Pilates
          <i className="detail">Pilates Studio</i>
        </small>
        {renderLogo('xlstudio')}
        <small className="note">
          XL Studio
          <i className="detail">Social Media Studio</i>
        </small>
        {renderLogo('filmxl')}
        {renderLogo('sozlukxl')}
        {renderLogo('takvimxl')}
        <small className="note">
          XL
          <i className="detail">Social Accounts Family</i>
        </small>
        {renderLogo('socradar')}
        <small className="note">
          SOCRadar (Revision)
          <i className="detail">Digital Risk Platform</i>
        </small>
        {renderLogo('mudavim')}
        <small className="note">
          Müdavim
          <i className="detail">Customer Loyalty Application</i>
        </small>
        {renderLogo('base64ai')}
        <small className="note">
          Base64.ai
          <i className="detail">Document Processing Platform</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2019
        </Heading>
        {renderLogo('docuai')}
        <small className="note">
          Docu.ai
          <i className="detail">AI-powered Data Extraction</i>
        </small>
        {renderLogo('indexify')}
        <small className="note">
          Indexify (x<sub>i</sub>)
          <i className="detail">Journal Organizer</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2018
        </Heading>
        {renderLogo('groups')}
        <small className="note">
          Grou.ps
          <i className="detail">Privacy-focused Social Platform</i>
        </small>
        {renderLogo('graphjs')}
        {renderLogo('graphbuild')}
        {renderLogo('graphpress')}
        <small className="note">
          Graph
          <i className="detail">Product Family</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2017
        </Heading>
        {renderLogo('monoevent')}
        <small className="note">
          Mono Event
          <i className="detail">Event Planning Company</i>
        </small>
        {renderLogo('postmatik')}
        <small className="note">
          Postmatik
          <i className="detail">Social Media Management Tool</i>
        </small>
        {renderLogo('fihrist')}
        <small className="note">
          Fihrist
          <i className="detail">Text-only Reading Experience</i>
        </small>
        {renderLogo('brush')}
        <small className="note">
          Brush
          <i className="detail">Product Marketplace for Artworks</i>
        </small>
        {renderLogo('earlybird')}
        <small className="note">
          earlybird
          <i className="detail">Early-stage Product Announcements</i>
        </small>
        {renderLogo('popsouls')}
        <small className="note">
          POPSouls
          <i className="detail">Online Celebrity Magazine</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2016
        </Heading>
        {renderLogo('flashtech')}
        <small className="note">
          Flashtech
          <i className="detail">A Family of Applications</i>
        </small>
        {renderLogo('sprintvpn')}
        <small className="note">
          SprintVPN
          <i className="detail">Pay-as-you-go VPN Service</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2015
        </Heading>
        {renderLogo('ikort')}
        <small className="note">
          i-kort
          <i className="detail">Mobile Sports Application</i>
        </small>
        {renderLogo('odtumodatoplulugu')}
        <small className="note">
          ODTÜ Moda Topluluğu
          <i className="detail">Fashion Club</i>
        </small>
        {renderLogo('moybox')}
        <small className="note">
          MoyBox
          <i className="detail">Home Networking Device</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2014
        </Heading>
        {renderLogo('favogue')}
        <small className="note">
          Favogue
          <i className="detail">Daily Fashion Inspiration</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2013
        </Heading>
        {renderLogo('semantica')}
        <small className="note">
          Semantica
          <i className="detail">Tech Company</i>
        </small>
        {renderLogo('cardz')}
        <small className="note">
          Cardz
          <i className="detail">Instant Business Cards & Websites</i>
        </small>
        {renderLogo('sosyalmetin')}
        <small className="note">
          Sosyal Metin
          <i className="detail">Social Quotes Website</i>
        </small>
        {renderLogo('fraktalproje')}
        <small className="note">
          Fraktal Proje
          <i className="detail">Design Company</i>
        </small>
        {renderLogo('national')}
        <small className="note">
          National
          <i className="detail">Investment Consultancy</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2012
        </Heading>
        {renderLogo('orion')}
        <small className="note">
          Orion
          <i className="detail">Art History Magazine</i>
        </small>
        {renderLogo('bora')}
        <small className="note">
          Bora
          <i className="detail">Architecture & Planning</i>
        </small>
        {renderLogo('express')}
        <small className="note">
          Express
          <i className="detail">Translation Services</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2011
        </Heading>
        {renderLogo('piccture')}
        <small className="note">
          Piccture
          <i className="detail">Feedback Platform for Designers</i>
        </small>
        {renderLogo('maruf')}
        <small className="note">
          Maruf YMM
          <i className="detail">Accounting Firm</i>
        </small>
        {renderLogo('ggt')}
        <small className="note">
          ODTÜ GGT (Revision)
          <i className="detail">Young Entrepreneurs Society</i>
        </small>
        {renderLogo('toplumicinsehircilik')}
        <small className="note">
          Toplum İçin Şehircilik
          <i className="detail">Urban Studies Society</i>
        </small>
        {renderLogo('esetron')}
        <small className="note">
          Esetron
          <i className="detail">Smart Robotechnologies</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2010
        </Heading>
        {renderLogo('pmum')}
        <small className="note">
          PMUM (Revision)
          <i className="detail">Energy Exchange Market</i>
        </small>
        {renderLogo('waplog')}
        <small className="note">
          Waplog (U+I - You and I)
          <i className="detail">Online Dating Platform</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2009
        </Heading>
        {renderLogo('greenhouse')}
        <small className="note">
          Greenhouse
          <i className="detail">Vegetarian Restaurant</i>
        </small>
        {renderLogo('sunshine')}
        <small className="note">
          Sunshine
          <i className="detail">Cafe & Bistro</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2008
        </Heading>
        {renderLogo('cinemasociety')}
        <small className="note">
          Sinema Topluluğu
          <i className="detail">Cinema Society</i>
        </small>
      </Content>
      <Separator spacing="xlarge" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2007
        </Heading>
        {renderLogo('anlatokulunu')}
        <small className="note">
          “Narrate Your School“
          <i className="detail">Preliminary Web Design Contest</i>
        </small>
      </Content>
    </>
  )
}

// Export
export default LogoCollection
