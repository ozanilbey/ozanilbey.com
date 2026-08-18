// Constants
import { ROOT_URL } from '@source/constants/environment'
import { THEMES } from '@source/constants/options'
import { DEFAULT_COLOR_IN_HEX } from '@source/constants/settings'

// Constant: Meta > Author
const AUTHOR = {
  description: 'Ozan Ilbey Yilmaz is a senior designer+developer focused on creating digital products with unique visual identities.',
  keywords: ['Ozan Yilmaz', 'Ozan Ilbey Yilmaz', 'ozanilbey', 'ozan', 'design', 'designer', 'multidisciplinary designer', 'developer', 'web designer', 'web developer', 'user interface designer', 'UI designer', 'user experience designer', 'UX designer', 'frontend developer', 'fullstack developer', 'software engineer', 'engineering manager', 'tech lead'],
  name: 'Ozan Ilbey Yilmaz',
  username: 'ozanilbey'
}

// Constant: Meta > Brand
const BRAND = {
  color: DEFAULT_COLOR_IN_HEX,
  images: {
    icons: {
      default: {
        type: 'image/png',
        url: `${ROOT_URL}/images/brand/icon.png`
      },
      mask: {
        type: 'image/svg+xml',
        url: `${ROOT_URL}/images/brand/icon.svg`
      },
      tile: {
        type: 'image/png',
        url: `${ROOT_URL}/images/brand/icon-tile.png`
      },
      touch: {
        type: 'image/png',
        url: `${ROOT_URL}/images/brand/icon-touch.png`
      }
    },
    preview: {
      default: {
        type: 'image/png',
        url: `${ROOT_URL}/images/brand/preview.png`
      }
    }
  },
  name: AUTHOR.username
}

// Constant: Meta > Site
const SITE = {
  author: AUTHOR.name,
  color: BRAND.color,
  description: AUTHOR.description,
  keywords: AUTHOR.keywords,
  name: BRAND.name,
  resources: [
    {
      name: 'Cloudinary',
      url: 'https://cloudinary.com'
    }
  ],
  themes: THEMES
}

// Export
export {
  AUTHOR,
  BRAND,
  SITE
}
