export const MOCK_GROUP_CLIENT_HIGHLIGHTS = [
  {
    src: '/images/marquee_image_1.png',
    alt: 'marquee_image_1',
  },
  {
    src: '/images/marquee_image_2.png',
    alt: 'marquee_image_2',
  },
  {
    src: '/images/marquee_image_3.png',
    alt: 'marquee_image_3',
  },
  {
    key: '4',
    src: '/images/marquee_image_4.png',
    alt: 'marquee_image_4',
  },
  {
    key: '5',
    src: '/images/marquee_image_5.png',
    alt: 'marquee_image_5',
  },
  {
    key: '6',
    src: '/images/marquee_image_6.png',
    alt: 'marquee_image_6',
  },
  {
    key: '7',
    src: '/images/marquee_image_1.png',
    alt: 'marquee_image_7',
  },
  {
    key: '8',
    src: '/images/marquee_image_2.png',
    alt: 'marquee_image_8',
  },
  {
    key: '9',
    src: '/images/marquee_image_3.png',
    alt: 'marquee_image_9',
  },
].map((item, i) => ({ ...item, id: i }))

export const MOCK_TECH_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_DATA_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_DESIGN_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_DIGITAL_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_FINX_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_GOVX_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS

export const MOCK_AEL_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_SRI_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_GVS_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS
export const MOCK_COASTAL_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS

export const MOCK_CLIENT_HIGHLIGHTS = {
  GROUP: MOCK_GROUP_CLIENT_HIGHLIGHTS,
  TECH: MOCK_TECH_CLIENT_HIGHLIGHTS,
  DATA: MOCK_DATA_CLIENT_HIGHLIGHTS,
  DESIGN: MOCK_DESIGN_CLIENT_HIGHLIGHTS,
  DIGITAL: MOCK_DIGITAL_CLIENT_HIGHLIGHTS,
  FINX: MOCK_FINX_CLIENT_HIGHLIGHTS,
  GOVX: MOCK_GOVX_CLIENT_HIGHLIGHTS,
  AEL: MOCK_AEL_CLIENT_HIGHLIGHTS,
  SRI: MOCK_SRI_CLIENT_HIGHLIGHTS,
  GVS: MOCK_GVS_CLIENT_HIGHLIGHTS,
  COASTAL: MOCK_COASTAL_CLIENT_HIGHLIGHTS,
}
