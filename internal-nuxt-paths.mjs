import { joinRelativeURL } from 'ufo'

const base = process.env.NUXT_APP_BASE_URL || '/'
const assetsDir = process.env.NUXT_BUILD_ASSETS_DIR || '/_nuxt/'
const cdn = process.env.NUXT_APP_CDN_URL || ''

const publicBase = cdn || base

export const baseURL = () => base
export const buildAssetsDir = () => assetsDir
export const publicAssetsURL = (...path) => (path.length ? joinRelativeURL(publicBase, ...path) : publicBase)
export const buildAssetsURL = (...path) => joinRelativeURL(publicAssetsURL(), assetsDir, ...path)
