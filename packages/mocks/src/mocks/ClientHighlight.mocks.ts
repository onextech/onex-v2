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
].map((item, i) => ({ ...item, id: i }))

export const MOCK_TECH_CLIENT_HIGHLIGHTS = MOCK_GROUP_CLIENT_HIGHLIGHTS

export const MOCK_CLIENT_HIGHLIGHTS = {
  GROUP: MOCK_GROUP_CLIENT_HIGHLIGHTS,
  TECH: MOCK_TECH_CLIENT_HIGHLIGHTS,
}
