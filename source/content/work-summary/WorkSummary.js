// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'

// Subcontent
import AlkaProjeWebsite from './items/AlkaProjeWebsite'
import AtomWebsite from './items/AtomWebsite'
import BoraCorporateIdentity from './items/BoraCorporateIdentity'
import Brush from './items/Brush'
import Cardz from './items/Cardz'
import EsetronCorporateIdentity from './items/EsetronCorporateIdentity'
import Favogue from './items/Favogue'
import Fihrist from './items/Fihrist'
import FlashtechWebApplicationUI from './items/FlashtechWebApplicationUI'
import FraktalProjeCorporateIdentity from './items/FraktalProjeCorporateIdentity'
import GirisimcilikKongresiVisuals from './items/GirisimcilikKongresiVisuals'
import IkortMobileApplication from './items/IkortMobileApplication'
import InvportWebApplication from './items/InvportWebApplication'
import LogoCollection from './items/LogoCollection'
import MarufCorporateIdentity from './items/MarufCorporateIdentity'
import ODTUGGTCorporateIdentity from './items/ODTUGGTCorporateIdentity'
import OttomanMusicArchiveWebApplication from './items/OttomanMusicArchiveWebApplication'
import Piccture from './items/Piccture'
import PosterCollection from './items/PosterCollection'
import WaplogMobileApplication from './items/WaplogMobileApplication'
import WaplogWebApplication from './items/WaplogWebApplication'
import WebsiteCollection from './items/WebsiteCollection'

// Style
import './WorkSummary.less'

// Content: Work Summary (Type)
function WorkSummary (props) {
  // Methods
  function renderSummary () {
    switch (props.identifier) {
      case 'alka-proje-website':
        return <AlkaProjeWebsite />
      case 'atom-website':
        return <AtomWebsite />
      case 'bora-corporate-identity':
        return <BoraCorporateIdentity />
      case 'brush':
        return <Brush />
      case 'cardz':
        return <Cardz />
      case 'esetron-corporate-identity':
        return <EsetronCorporateIdentity />
      case 'favogue':
        return <Favogue />
      case 'fihrist':
        return <Fihrist />
      case 'flashtech-web-application-ui':
        return <FlashtechWebApplicationUI />
      case 'fraktal-proje-corporate-identity':
        return <FraktalProjeCorporateIdentity />
      case 'girisimcilik-kongresi-visuals':
        return <GirisimcilikKongresiVisuals />
      case 'ikort-mobile-application':
        return <IkortMobileApplication />
      case 'invport-web-application':
        return <InvportWebApplication />
      case 'logo-collection':
        return <LogoCollection />
      case 'maruf-corporate-identity':
        return <MarufCorporateIdentity />
      case 'odtu-ggt-corporate-identity':
        return <ODTUGGTCorporateIdentity />
      case 'ottoman-music-archive-web-application':
        return <OttomanMusicArchiveWebApplication />
      case 'piccture':
        return <Piccture />
      case 'poster-collection':
        return <PosterCollection />
      case 'waplog-mobile-application':
        return <WaplogMobileApplication />
      case 'waplog-web-application':
        return <WaplogWebApplication />
      case 'website-collection':
        return <WebsiteCollection />
      default:
        return null
    }
  }

  // Render
  return (
    <Page.Section
      name="work-summary"
      data-content="work-summary">
      {renderSummary()}
    </Page.Section>
  )
}

// Properties
WorkSummary.propTypes = {
  identifier: PropTypes.string
}

// Export
export default WorkSummary
