// Modules
import PropTypes from 'prop-types'

// Components
import Page from '@source/components/layout/page/Page'

// Content
import _101ExtraAdsGlow from './content/101ExtraAdsGlow'
import _101ExtraAdsMixed from './content/101ExtraAdsMixed'
import _101ExtraAdsPicker from './content/101ExtraAdsPicker'
import _101ExtraAdsRamadan from './content/101ExtraAdsRamadan'
import _101ExtraFacebookPage from './content/101ExtraFacebookPage'
import AlkaProjeWebsite from './content/AlkaProjeWebsite'
import AtomWebsite from './content/AtomWebsite'
import Base64AIPlatform from './content/Base64AIPlatform'
import Base64AIBranding from './content/Base64AIBranding'
import Base64AIWebsite from './content/Base64AIWebsite'
import BoraCorporateIdentity from './content/BoraCorporateIdentity'
import Brush from './content/Brush'
import CanOkeyAdsYourMove from './content/CanOkeyAdsYourMove'
import CanOkeyFacebookPage from './content/CanOkeyFacebookPage'
import Cardz from './content/Cardz'
import EsetronCorporateIdentity from './content/EsetronCorporateIdentity'
import Favogue from './content/Favogue'
import Fihrist from './content/Fihrist'
import FlashtechWebApplicationUI from './content/FlashtechWebApplicationUI'
import FraktalProjeCorporateIdentity from './content/FraktalProjeCorporateIdentity'
import GirisimcilikKongresiVisuals from './content/GirisimcilikKongresiVisuals'
import GraphBuild from './content/GraphBuild'
import GraphJS from './content/GraphJS'
import GraphJSWebsite from './content/GraphJSWebsite'
import IkortMobileApplication from './content/IkortMobileApplication'
import InvportWebApplication from './content/InvportWebApplication'
import LogoCollection from './content/LogoCollection'
import MarufCorporateIdentity from './content/MarufCorporateIdentity'
import MegaPosters from './content/MegaPosters'
import ODTUGGTCorporateIdentity from './content/ODTUGGTCorporateIdentity'
import OkeyExtraAdsHacivatKaragoz from './content/OkeyExtraAdsHacivatKaragoz'
import OkeyExtraAdsHandDrawn from './content/OkeyExtraAdsHandDrawn'
import OkeyExtraAdsReactions from './content/OkeyExtraAdsReactions'
import OkeyExtraFacebookPage from './content/OkeyExtraFacebookPage'
import OttomanMusicArchiveWebApplication from './content/OttomanMusicArchiveWebApplication'
import Piccture from './content/Piccture'
import PokerExtraAdsMixed from './content/PokerExtraAdsMixed'
import PosterCollection from './content/PosterCollection'
import RakkipFacebookPage from './content/RakkipFacebookPage'
import RockSenligiVisuals from './content/RockSenligiVisuals'
import SecFusionBranding from './content/SecFusionBranding'
import SecFusionBrochure from './content/SecFusionBrochure'
import SecFusionWebsite from './content/SecFusionWebsite'
import SiberestPosters from './content/SiberestPosters'
import SOCRadarBranding from './content/SOCRadarBranding'
import SOCRadarWebsite from './content/SOCRadarWebsite'
import TekelOkeyFacebookPage from './content/TekelOkeyFacebookPage'
import WaplogMobileApplication from './content/WaplogMobileApplication'
import WaplogWebApplication from './content/WaplogWebApplication'
import WebsiteCollection from './content/WebsiteCollection'

// Helpers
import { getAttributes } from '@source/helpers/component'

// Styles
import './Body.scss'

// Constants (Local)
const DOCUMENTS = {
  '101-extra-ads-glow': _101ExtraAdsGlow,
  '101-extra-ads-mixed': _101ExtraAdsMixed,
  '101-extra-ads-picker': _101ExtraAdsPicker,
  '101-extra-ads-ramadan': _101ExtraAdsRamadan,
  '101-extra-facebook-page': _101ExtraFacebookPage,
  'alka-proje-website': AlkaProjeWebsite,
  'atom-website': AtomWebsite,
  'base64-ai-platform': Base64AIPlatform,
  'base64-ai-branding': Base64AIBranding,
  'base64-ai-website': Base64AIWebsite,
  'bora-corporate-identity': BoraCorporateIdentity,
  'brush': Brush,
  'can-okey-ads-your-move': CanOkeyAdsYourMove,
  'can-okey-facebook-page': CanOkeyFacebookPage,
  'cardz': Cardz,
  'esetron-corporate-identity': EsetronCorporateIdentity,
  'favogue': Favogue,
  'fihrist': Fihrist,
  'flashtech-web-application-ui': FlashtechWebApplicationUI,
  'fraktal-proje-corporate-identity': FraktalProjeCorporateIdentity,
  'girisimcilik-kongresi-visuals': GirisimcilikKongresiVisuals,
  'graphbuild': GraphBuild,
  'graphjs': GraphJS,
  'graphjs-website': GraphJSWebsite,
  'ikort-mobile-application': IkortMobileApplication,
  'invport-web-application': InvportWebApplication,
  'logo-collection': LogoCollection,
  'maruf-corporate-identity': MarufCorporateIdentity,
  'mega-posters': MegaPosters,
  'odtu-ggt-corporate-identity': ODTUGGTCorporateIdentity,
  'okey-extra-ads-hacivat-karagoz': OkeyExtraAdsHacivatKaragoz,
  'okey-extra-ads-hand-drawn': OkeyExtraAdsHandDrawn,
  'okey-extra-ads-reactions': OkeyExtraAdsReactions,
  'okey-extra-facebook-page': OkeyExtraFacebookPage,
  'ottoman-music-archive-web-application': OttomanMusicArchiveWebApplication,
  'piccture': Piccture,
  'poker-extra-ads-mixed': PokerExtraAdsMixed,
  'poster-collection': PosterCollection,
  'rakkip-facebook-page': RakkipFacebookPage,
  'rock-senligi-visuals': RockSenligiVisuals,
  'secfusion-branding': SecFusionBranding,
  'secfusion-brochure': SecFusionBrochure,
  'secfusion-website': SecFusionWebsite,
  'siberest-posters': SiberestPosters,
  'socradar-branding': SOCRadarBranding,
  'socradar-website': SOCRadarWebsite,
  'tekel-okey-facebook-page': TekelOkeyFacebookPage,
  'waplog-mobile-application': WaplogMobileApplication,
  'waplog-web-application': WaplogWebApplication,
  'website-collection': WebsiteCollection
}

// Section: Works > Work > Body
function Body ({ className, identifier, style, ...rest }) {
  // Functions
  const Element = DOCUMENTS[identifier]
  const attributes = getAttributes(rest, ['aria', 'data'])

  // Render
  if (!Element) return null
  return (
    <Page.Section
      name="body"
      {...attributes}
      className={className}
      style={style}>
      <Element />
    </Page.Section>
  )
}

// Properties
Body.propTypes = {
  className: PropTypes.string,
  identifier: PropTypes.string,
  style: PropTypes.object
}

// Export
export default Body
