// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/model/media/Media'
import Separator from '@source/components/layout/separator/Separator'

// Constants (Local)
const WEBSITE_SIZE_WIDTH_MAPPING = {
  large: 1152,
  medium: 1024,
  small: 896
}

// Content: Works > Work > Body > Website collection
function WebsiteCollection () {
  // Functions
  function renderWebsite (id, size = 'large') {
    return (
      <Media
        type="image"
        className="media"
        width={WEBSITE_SIZE_WIDTH_MAPPING[size]}
        path={`/website-collection/website-${id}.png`} />
    )
  }

  // Render
  return (
    <>
      <Content>
        <p>I started designing websites <strong>in 2003</strong>. First, I was only writing HTML. Then, I started working with graphical user interfaces. After years of practice, I learned a lot about web design, user interfaces and frontend engineering. I learned to balance form and function to create fully-functional and still aesthetically-pleasing web designs.</p>
        <p>Here are some of my works.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          2017
        </Heading>
        {renderWebsite('invport')}
        <small className="note">
          invport
          <i className="detail">Crowdsourced Innovation Platform</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2016
        </Heading>
        {renderWebsite('flashtech_01')}
        {renderWebsite('flashtech_02')}
        <small className="note">
          Flashtech
          <i className="detail">A Family of Applications</i>
        </small>
        {renderWebsite('miskintv_01')}
        {renderWebsite('miskintv_02')}
        <small className="note">
          MiskinTV
          <i className="detail">Online TV for Couchpotatoes</i>
        </small>
        {renderWebsite('2017yilbasi')}
        <small className="note">
          2017 Yılbaşı
          <i className="detail">Events Website</i>
        </small>
        {renderWebsite('cerenmurgan')}
        <small className="note">
          Ceren Murgan, Editor
          <i className="detail">Article Portfolio</i>
        </small>
        {renderWebsite('mobileaction')}
        <small className="note">
          Mobile Action
          <i className="detail">Keyword Tracking Page</i>
        </small>
        {renderWebsite('alkaproje')}
        <small className="note">
          Alka Proje
          <i className="detail">Architecture Company</i>
        </small>
        {renderWebsite('sprintvpn')}
        <small className="note">
          SprintVPN
          <i className="detail">Pay-as-you-go VPN Service</i>
        </small>
        {renderWebsite('golhaberi')}
        <small className="note">
          Gol Haberi
          <i className="detail">Live Scores Web Application</i>
        </small>
        {renderWebsite('favogueblog')}
        <small className="note">
          Favogue Blog
          <i className="detail">Company Blog</i>
        </small>
        {renderWebsite('okumatik')}
        <small className="note">
          Okumatik
          <i className="detail">Interactive Book</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2015
        </Heading>
        {renderWebsite('moybox')}
        <small className="note">
          MoyBox
          <i className="detail">Home Networking Device</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2014
        </Heading>
        {renderWebsite('favogue_01')}
        {renderWebsite('favogue_02')}
        <small className="note">
          Favogue
          <i className="detail">Daily Fashion Inspiration</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2013
        </Heading>
        {renderWebsite('piccture_01')}
        {renderWebsite('piccture_02')}
        <small className="note">
          Piccture
          <i className="detail">Feedback Platform for Designers</i>
        </small>
        {renderWebsite('cardz_01')}
        {renderWebsite('cardz_02')}
        <small className="note">
          Cardz
          <i className="detail">Instant Business Cards & Websites</i>
        </small>
        {renderWebsite('sosyalmetin')}
        <small className="note">
          Sosyal Metin
          <i className="detail">Social Quotes Website</i>
        </small>
        {renderWebsite('zerdali_01')}
        {renderWebsite('zerdali_02')}
        <small className="note">
          Zerdali
          <i className="detail">Restaurant & Bakery</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2012
        </Heading>
        {renderWebsite('waplog_01')}
        {renderWebsite('waplog_02')}
        <small className="note">
          Waplog
          <i className="detail">Online Dating Platform</i>
        </small>
        {renderWebsite('trtkulliyat')}
        <small className="note">
          TRT Külliyat
          <i className="detail">Ottoman Music Archive Web Application</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2011
        </Heading>
        {renderWebsite('cyberpark')}
        <small className="note">
          Bilkent Cyberpark
          <i className="detail">Technology Park</i>
        </small>
        {renderWebsite('harezmi')}
        <small className="note">
          Harezmi
          <i className="detail">Software Company</i>
        </small>
        {renderWebsite('atom')}
        <small className="note">
          ATOM
          <i className="detail">Game Development Center</i>
        </small>
        {renderWebsite('emailtakip_01')}
        <small className="note">
          emailtakip
          <i className="detail">Email Follow-up System</i>
        </small>
        {renderWebsite('ggt')}
        <small className="note">
          ODTÜ GGT
          <i className="detail">Young Entrepreneurs Society</i>
        </small>
        {renderWebsite('kodobur')}
        <small className="note">
          Kodobur
          <i className="detail">Game & Education Company</i>
        </small>
        {renderWebsite('clonesuite')}
        <small className="note">
          Clone Suite
          <i className="detail">Personal Homepage Template</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2010
        </Heading>
        {renderWebsite('borben', 'medium')}
        <small className="note">
          Bor-Ben
          <i className="detail">Oil Drilling Company</i>
        </small>
        {renderWebsite('asem', 'medium')}
        <small className="note">
          ASEM
          <i className="detail">Private School</i>
        </small>
        {renderWebsite('fargo_01', 'medium')}
        {renderWebsite('fargo_02', 'medium')}
        <small className="note">
          Fargo
          <i className="detail">Telemetry Systems</i>
        </small>
        {renderWebsite('pmum', 'medium')}
        <small className="note">
          PMUM
          <i className="detail">Energy Exchange Market</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2009
        </Heading>
        {renderWebsite('fiyatbu', 'medium')}
        <small className="note">
          fiyatbu
          <i className="detail">E-Commerce Website</i>
        </small>
        {renderWebsite('chatware', 'medium')}
        <small className="note">
          Chatware
          <i className="detail">Random Chat Application</i>
        </small>
        {renderWebsite('imdexhibition_01', 'medium')}
        {renderWebsite('imdexhibition_02', 'medium')}
        <small className="note">
          IMD-Exhibition
          <i className="detail">Online Project Showcase</i>
        </small>
        {renderWebsite('mersinasansor', 'medium')}
        <small className="note">
          Mersin Asansör Koordinatörlüğü
          <i className="detail">Informative Website</i>
        </small>
        {renderWebsite('kalkgit', 'medium')}
        <small className="note">
          kalkgit
          <i className="detail">Portfolio of Onur Atay</i>
        </small>
        {renderWebsite('yeniyol', 'medium')}
        <small className="note">
          Yeni Yol Dershanesi
          <i className="detail">Private School</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2008
        </Heading>
        {renderWebsite('cinemasociety', 'small')}
        <small className="note">
          Cinema Society
        </small>
        {renderWebsite('tgz', 'small')}
        <small className="note">
          TGZ
          <i className="detail">Technology & Entrepreneurship Summit</i>
        </small>
        {renderWebsite('kgg', 'small')}
        <small className="note">
          KGG
          <i className="detail">Campus Development Days</i>
        </small>
        <Heading
          rank={2}
          className="title">
          2007
        </Heading>
        {renderWebsite('anlatokulunu', 'small')}
        <small className="note">
          “Narrate Your School“
          <i className="detail">Preliminary Web Design Contest</i>
        </small>
      </Content>
      <Separator spacing="large" />
      <Content>
        <Heading
          rank={2}
          className="title">
          2003-2007
        </Heading>
        <p>I decided not to display my early projects because they look terrible. Think about it. Websites made before 2007 usually had lots of ornaments, grunge textures, unnecessary illustrations, and worst of all: embedded image-texts as there wasn’t any cross-browser custom font option. Not to mention, lack of PNG transparency support.</p>
      </Content>
    </>
  )
}

// Export
export default WebsiteCollection
