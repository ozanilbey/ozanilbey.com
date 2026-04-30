// Modules
import { useMemo } from 'react'

// Constants
import { MEDIA_URL } from '@source/constants/environment'

// Constants (Local)
const BREAKPOINTS = [64, 128, 192, 256, 320, 384, 512, 640, 768, 896, 1024, 1152]

// Functions (Local)
function calculateURL (path, { height, prefix, width, willCrop } = {}) {
  let transformation = 'dpr_1'
  if (width || height) {
    if (width) transformation += `,w_${width}`
    if (height) transformation += `,h_${height}`
    if (willCrop) {
      transformation += `,c_lfill,g_north`
      if (width && height) transformation += `/ar_${width / height},c_crop,g_north`
    } else transformation += `,c_limit`
  }
  return `${MEDIA_URL}${prefix || ''}/${transformation}${path}`
}
function calculateSources (path, { height, width, willCrop }) {
  const sources = {}
  BREAKPOINTS.forEach(breakpoint => {
    const options = { width: breakpoint, willCrop }
    if (width && height) options.height = Math.ceil(height / width * breakpoint)
    sources[breakpoint] = calculateURL(path, options)
  })
  return sources
}

// Hook: Model > Media > Source
function useSource ({ height, path, type, width, willCrop }) {
  // Data (Memoized)
  const sources = useMemo(() => {
    if (type === 'image') return calculateSources(path, { height, width, willCrop })
  }, [height, path, type, width, willCrop])
  const source = useMemo(() => {
    if (type === 'image') return Object.values(sources)[0]
    return calculateURL(path, {
      height,
      prefix: type === 'video' ? '/video/upload' : null,
      width,
      willCrop
    })
  }, [height, path, type, width, willCrop])
  const sourceSet = useMemo(() => {
    if (type !== 'image') return
    return Object
      .keys(sources)
      .map(key => `${sources[key]} ${key}w`)
      .join(', ')
  }, [sources, type])

  // Response
  return {
    source,
    sources,
    sourceSet
  }
}

// Export
export default useSource
