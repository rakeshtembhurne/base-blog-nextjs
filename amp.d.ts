// Allow AMP elements to be a property on JSX.IntrinsicElements

interface StoryLayer {
  template: 'fill' | 'vertical' | 'horizontal' | 'thirds'
  type: string
  src?: string
  width?: number
  height?: number
  layout?: string
  alt?: string
  title?: string
  subtitle?: string
  heading?: string
  subheading?: string
  upper?: string
  middle?: string | null
  lower?: string
  contents?: string[]
}

// Only the intrinsic elements defined here will be accepted, and only with the attributes defined here
declare namespace JSX {
  interface AmpImg {
    alt: string
    src: string
    width?: number
    height?: number
    layout: string
  }
  interface AmpVideo {
    width: string
    height: string
    layout: string
    poster: string
    children: React.ReactNode
    autoplay: string
    loop?: string
  }
  interface AmpStory {
    standalone: string
    title: string
    publisher: string
    'publisher-logo-src': string
    'poster-portrait-src': string
    children: React.ReactNode
  }
  interface AmpStoryPage {
    key?: number | string // FIXME: shouldn't be included
    id: string
    children: React.ReactNode
  }
  interface AmpStoryGridLayer {
    key?: number | string // FIXME: shouldn't be included
    template: 'fill' | 'vertical' | 'horizontal' | 'thirds'
    children: React.ReactNode
  }
  interface AmpStoryBookend {
    src: string
    layout?:
      | 'fill'
      | 'fixed'
      | 'fixed-height'
      | 'flex-item'
      | 'intrinsic'
      | 'nodisplay'
      | 'responsive'
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
    'amp-video': AmpVideo
    'amp-story': AmpStory
    'amp-story-grid-layer': AmpStoryGridLayer
    'amp-story-page': AmpStoryPage
    'amp-story-bookend': AmpStoryBookend
  }
}

// Only the intrinsic elements defined here will be accepted, attributes don't matter
// declare namespace JSX {
//   interface IntrinsicElements {
//     'amp-img': any
//     'amp-video': any
//     'amp-story': any
//     'amp-story-grid-layer': any
//     'amp-story-page': any
//     'amp-story-bookend': any
//   }
// }

// All intrinsic elements will be accepted
// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any
//   }
// }
