// Modules
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Page from '~/components/layout/page/Page'

// Subcontent
import _101ExtraAdsGlow from './items/101ExtraAdsGlow'
import _101ExtraAdsMixed from './items/101ExtraAdsMixed'
import _101ExtraAdsPicker from './items/101ExtraAdsPicker'
import _101ExtraAdsRamadan from './items/101ExtraAdsRamadan'
import _101ExtraFacebookPage from './items/101ExtraFacebookPage'
import AlkaProjeWebsite from './items/AlkaProjeWebsite'
import AtomWebsite from './items/AtomWebsite'
import BoraCorporateIdentity from './items/BoraCorporateIdentity'
import Brush from './items/Brush'
import CanOkeyAdsYourMove from './items/CanOkeyAdsYourMove'
import CanOkeyFacebookPage from './items/CanOkeyFacebookPage'
import Cardz from './items/Cardz'
import EsetronCorporateIdentity from './items/EsetronCorporateIdentity'
import Favogue from './items/Favogue'
import Fihrist from './items/Fihrist'
import FlashtechWebApplicationUI from './items/FlashtechWebApplicationUI'
import FraktalProjeCorporateIdentity from './items/FraktalProjeCorporateIdentity'
import GirisimcilikKongresiVisuals from './items/GirisimcilikKongresiVisuals'
import GraphBuild from './items/GraphBuild'
import GraphJS from './items/GraphJS'
import GraphJSWebsite from './items/GraphJSWebsite'
import IkortMobileApplication from './items/IkortMobileApplication'
import InvportWebApplication from './items/InvportWebApplication'
import LogoCollection from './items/LogoCollection'
import MarufCorporateIdentity from './items/MarufCorporateIdentity'
import MegaPosters from './items/MegaPosters'
import ODTUGGTCorporateIdentity from './items/ODTUGGTCorporateIdentity'
import OkeyExtraAdsHacivatKaragoz from './items/OkeyExtraAdsHacivatKaragoz'
import OkeyExtraAdsHandDrawn from './items/OkeyExtraAdsHandDrawn'
import OkeyExtraAdsReactions from './items/OkeyExtraAdsReactions'
import OkeyExtraFacebookPage from './items/OkeyExtraFacebookPage'
import OttomanMusicArchiveWebApplication from './items/OttomanMusicArchiveWebApplication'
import Piccture from './items/Piccture'
import PokerExtraAdsMixed from './items/PokerExtraAdsMixed'
import PosterCollection from './items/PosterCollection'
import RakkipFacebookPage from './items/RakkipFacebookPage'
import RockSenligiVisuals from './items/RockSenligiVisuals'
import SecFusionBranding from './items/SecFusionBranding'
import SecFusionBrochure from './items/SecFusionBrochure'
import SecFusionWebsite from './items/SecFusionWebsite'
import SiberestPosters from './items/SiberestPosters'
import SOCRadarBranding from './items/SOCRadarBranding'
import SOCRadarWebsite from './items/SOCRadarWebsite'
import TekelOkeyFacebookPage from './items/TekelOkeyFacebookPage'
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
      case '101-extra-ads-glow':
        return <_101ExtraAdsGlow />
      case '101-extra-ads-mixed':
        return <_101ExtraAdsMixed />
      case '101-extra-ads-picker':
        return <_101ExtraAdsPicker />
      case '101-extra-ads-ramadan':
        return <_101ExtraAdsRamadan />
      case '101-extra-facebook-page':
        return <_101ExtraFacebookPage />
      case 'alka-proje-website':
        return <AlkaProjeWebsite />
      case 'atom-website':
        return <AtomWebsite />
      case 'bora-corporate-identity':
        return <BoraCorporateIdentity />
      case 'brush':
        return <Brush />
      case 'can-okey-ads-your-move':
        return <CanOkeyAdsYourMove />
      case 'can-okey-facebook-page':
        return <CanOkeyFacebookPage />
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
      case 'graphbuild':
        return <GraphBuild />
      case 'graphjs':
        return <GraphJS />
      case 'graphjs-website':
        return <GraphJSWebsite />
      case 'ikort-mobile-application':
        return <IkortMobileApplication />
      case 'invport-web-application':
        return <InvportWebApplication />
      case 'logo-collection':
        return <LogoCollection />
      case 'maruf-corporate-identity':
        return <MarufCorporateIdentity />
      case 'mega-posters':
        return <MegaPosters />
      case 'odtu-ggt-corporate-identity':
        return <ODTUGGTCorporateIdentity />
      case 'okey-extra-ads-hacivat-karagoz':
        return <OkeyExtraAdsHacivatKaragoz />
      case 'okey-extra-ads-hand-drawn':
        return <OkeyExtraAdsHandDrawn />
      case 'okey-extra-ads-reactions':
        return <OkeyExtraAdsReactions />
      case 'okey-extra-facebook-page':
        return <OkeyExtraFacebookPage />
      case 'ottoman-music-archive-web-application':
        return <OttomanMusicArchiveWebApplication />
      case 'piccture':
        return <Piccture />
      case 'poker-extra-ads-mixed':
        return <PokerExtraAdsMixed />
      case 'poster-collection':
        return <PosterCollection />
      case 'rakkip-facebook-page':
        return <RakkipFacebookPage />
      case 'rock-senligi-visuals':
        return <RockSenligiVisuals />
      case 'secfusion-branding':
        return <SecFusionBranding />
      case 'secfusion-brochure':
        return <SecFusionBrochure />
      case 'secfusion-website':
        return <SecFusionWebsite />
      case 'siberest-posters':
        return <SiberestPosters />
      case 'socradar-branding':
        return <SOCRadarBranding />
      case 'socradar-website':
        return <SOCRadarWebsite />
      case 'tekel-okey-facebook-page':
        return <TekelOkeyFacebookPage />
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
