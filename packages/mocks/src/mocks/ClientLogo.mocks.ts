import pick from 'lodash/pick'

const MOCK_CLIENT_LOGOS_OBJECT = {
  gic: {
    avatar_src: '/logos/logo_gic.svg',
    avatar_alt: 'logo_gic',
    avatar_width: { xs: 53, md: 105 },
    avatar_height: { xs: 27, md: 53 },
  },
  uob: {
    avatar_src: '/logos/logo_uob.png',
    avatar_alt: 'logo_uob',
    avatar_width: { xs: 52, md: 104 },
    avatar_height: { xs: 15, md: 30 },
  },
  julius_bar: {
    avatar_src: '/logos/logo_julius_bar.png',
    avatar_alt: 'logo_julius_bar',
    avatar_width: { xs: 72, md: 144 },
    avatar_height: { xs: 14, md: 28 },
  },
  canon: {
    avatar_src: '/logos/logo_canon.png',
    avatar_alt: 'logo_canon',
    avatar_width: { xs: 63, md: 125 },
    avatar_height: { xs: 14, md: 27 },
  },
  ssa: {
    avatar_src: '/logos/logo_ssa.png',
    avatar_alt: 'logo_ssa',
    avatar_width: { xs: 65, md: 130 },
    avatar_height: { xs: 15, md: 30 },
  },
  imo: {
    avatar_src: '/logos/logo_imo.svg',
    avatar_alt: 'logo_imo',
    avatar_width: { xs: 81, md: 162 },
    avatar_height: { xs: 16, md: 32 },
  },
  mpa: {
    avatar_src: '/logos/logo_mpa.svg',
    avatar_alt: 'logo_mpa',
    avatar_width: { xs: 35, md: 70 },
    avatar_height: { xs: 37, md: 73 },
  },
  pa: {
    avatar_src: '/logos/logo_pa.svg',
    avatar_alt: 'logo_pa',
    avatar_width: { xs: 32, md: 64 },
    avatar_height: { xs: 38, md: 76 },
  },
  sri: {
    avatar_src: '/logos/logo_sri.svg',
    avatar_alt: 'logo_sri',
    avatar_width: { xs: 45, md: 90 },
    avatar_height: { xs: 19, md: 38 },
  },
  suntec: {
    avatar_src: '/logos/logo_suntec.svg',
    avatar_alt: 'logo_suntec',
    avatar_width: { xs: 55, md: 110 },
    avatar_height: { xs: 35, md: 70 },
  },
  tsl: {
    avatar_src: '/logos/logo_tsl.svg',
    avatar_alt: 'logo_tsl',
    avatar_width: { xs: 50, md: 100 },
    avatar_height: { xs: 50, md: 100 },
  },
  tyme: {
    avatar_src: '/logos/logo_tyme.svg',
    avatar_alt: 'logo_tyme',
    avatar_width: { xs: 50, md: 99 },
    avatar_height: { xs: 30, md: 59 },
  },
  tvs: {
    avatar_src: '/logos/logo_tvs.svg',
    avatar_alt: 'logo_tvs',
    avatar_width: { xs: 70, md: 140 },
    avatar_height: { xs: 13.2, md: 26.4 },
  },
  dxd: {
    avatar_src: '/logos/logo_dxd.png',
    avatar_alt: 'logo_dxd',
    avatar_width: { xs: 60, md: 119 },
    avatar_height: { xs: 23, md: 45 },
  },
  mtj: {
    avatar_src: '/logos/logo_mtj.png',
    avatar_alt: 'logo_mtj',
    avatar_width: { xs: 78, md: 155 },
    avatar_height: { xs: 15, md: 30 },
  },
  gomu: {
    avatar_src: '/logos/logo_gomu.svg',
    avatar_alt: 'logo_gomu',
    avatar_width: { xs: 60, md: 119 },
    avatar_height: { xs: 23, md: 45 },
  },
  iix: {
    avatar_src: '/logos/logo_iix.svg',
    avatar_alt: 'logo_iix',
    avatar_width: { xs: 32, md: 63 },
    avatar_height: { xs: 32, md: 64 },
  },
  spiking: {
    avatar_src: '/logos/logo_spiking.svg',
    avatar_alt: 'logo_spiking',
    avatar_width: { xs: 45, md: 89 },
    avatar_height: { xs: 20, md: 39 },
  },
  moh: {
    avatar_src: '/logos/logo_moh.png',
    avatar_alt: 'logo_moh',
    avatar_width: { xs: 150, md: 200 },
    avatar_height: { xs: 75, md: 100 },
  },
}

export const MOCK_GROUP_CLIENT_LOGOS = Object.values(
  MOCK_CLIENT_LOGOS_OBJECT
).map((item, i) => ({ ...item, id: i }))

export const MOCK_TECH_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, [
    'gic',
    'imo',
    'julius_bar',
    'uob',
    'canon',
    'tvs',
    'mpa',
    'ssa',
    'pa',
  ])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

export const MOCK_FINX_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, ['gic', 'iix', 'julius_bar', 'spiking', 'uob'])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

export const MOCK_GOVX_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, ['gic', 'mpa', 'pa', 'ssa', 'imo', 'moh'])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

export const MOCK_DESIGN_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_DATA_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_DIGITAL_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_AEL_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS
export const MOCK_SRI_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS
export const MOCK_GVS_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS
export const MOCK_COASTAL_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_CLIENT_LOGOS = {
  GROUP: MOCK_GROUP_CLIENT_LOGOS,
  TECH: MOCK_TECH_CLIENT_LOGOS,
  DATA: MOCK_DATA_CLIENT_LOGOS,
  DESIGN: MOCK_DESIGN_CLIENT_LOGOS,
  DIGITAL: MOCK_DIGITAL_CLIENT_LOGOS,
  FINX: MOCK_FINX_CLIENT_LOGOS,
  GOVX: MOCK_GOVX_CLIENT_LOGOS,
  AEL: MOCK_AEL_CLIENT_LOGOS,
  SRI: MOCK_SRI_CLIENT_LOGOS,
  GVS: MOCK_GVS_CLIENT_LOGOS,
  COASTAL: MOCK_COASTAL_CLIENT_LOGOS,
}
