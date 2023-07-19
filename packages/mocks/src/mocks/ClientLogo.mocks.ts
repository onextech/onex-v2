import pick from 'lodash/pick'

const MOCK_CLIENT_LOGOS_OBJECT = {
  gic: {
    avatar_src: '/logos/logo_gic.svg',
    avatar_alt: 'logo_gic',
    avatar_width: 105,
    avatar_height: 53,
    sx: { width: { xs: 105 * 0.8, md: 105 }, height: { xs: 53 * 0.8, md: 53 } },
  },
  uob: {
    avatar_src: '/logos/logo_uob.png',
    avatar_alt: 'logo_uob',
    avatar_width: 104,
    avatar_height: 30,
    sx: { width: { xs: 104 * 0.8, md: 104 }, height: { xs: 30 * 0.8, md: 30 } },
  },
  julius_bar: {
    avatar_src: '/logos/logo_julius_bar.png',
    avatar_alt: 'logo_julius_bar',
    avatar_width: 144,
    avatar_height: 28,
    sx: { width: { xs: 144 * 0.8, md: 144 }, height: { xs: 28 * 0.8, md: 28 } },
  },
  canon: {
    avatar_src: '/logos/logo_canon.png',
    avatar_alt: 'logo_canon',
    avatar_width: 125,
    avatar_height: 27,
    sx: { width: { xs: 125 * 0.8, md: 125 }, height: { xs: 27 * 0.8, md: 27 } },
  },
  ssa: {
    avatar_src: '/logos/logo_ssa.png',
    avatar_alt: 'logo_ssa',
    avatar_width: 130,
    avatar_height: 30,
    sx: { width: { xs: 130 * 0.8, md: 130 }, height: { xs: 30 * 0.8, md: 30 } },
  },
  imo: {
    avatar_src: '/logos/logo_imo.svg',
    avatar_alt: 'logo_imo',
    avatar_width: 162,
    avatar_height: 32,
    sx: { width: { xs: 162 * 0.8, md: 162 }, height: { xs: 32 * 0.8, md: 32 } },
  },
  mpa: {
    avatar_src: '/logos/logo_mpa.svg',
    avatar_alt: 'logo_mpa',
    avatar_width: 70,
    avatar_height: 73,
    sx: { width: { xs: 70 * 0.8, md: 70 }, height: { xs: 73 * 0.8, md: 73 } },
  },
  pa: {
    avatar_src: '/logos/logo_pa.svg',
    avatar_alt: 'logo_pa',
    avatar_width: 64,
    avatar_height: 76,
    sx: { width: { xs: 64 * 0.8, md: 64 }, height: { xs: 76 * 0.8, md: 76 } },
  },
  sri: {
    avatar_src: '/logos/logo_sri.svg',
    avatar_alt: 'logo_sri',
    avatar_width: 90,
    avatar_height: 38,
    sx: { width: { xs: 90 * 0.8, md: 90 }, height: { xs: 38 * 0.8, md: 38 } },
  },
  suntec: {
    avatar_src: '/logos/logo_suntec.svg',
    avatar_alt: 'logo_suntec',
    avatar_width: 110,
    avatar_height: 70,
    sx: { width: { xs: 110 * 0.8, md: 110 }, height: { xs: 70 * 0.8, md: 70 } },
  },
  tsl: {
    avatar_src: '/logos/logo_tsl.svg',
    avatar_alt: 'logo_tsl',
    avatar_width: 100,
    avatar_height: 100,
    sx: {
      width: { xs: 100 * 0.8, md: 100 },
      height: { xs: 100 * 0.8, md: 100 },
    },
  },
  tyme: {
    avatar_src: '/logos/logo_tyme.svg',
    avatar_alt: 'logo_tyme',
    avatar_width: 99,
    avatar_height: 59,
    sx: { width: { xs: 99 * 0.8, md: 99 }, height: { xs: 59 * 0.8, md: 59 } },
  },
  tvs: {
    avatar_src: '/logos/logo_tvs.svg',
    avatar_alt: 'logo_tvs',
    avatar_width: 140,
    avatar_height: 26.4,
    sx: {
      width: { xs: 140 * 0.8, md: 140 },
      height: { xs: 26.4 * 0.8, md: 26.4 },
    },
  },
  dxd: {
    avatar_src: '/logos/logo_dxd.png',
    avatar_alt: 'logo_dxd',
    avatar_width: 119,
    avatar_height: 45,
    sx: { width: { xs: 119 * 0.8, md: 119 }, height: { xs: 45 * 0.8, md: 45 } },
  },
  mtj: {
    avatar_src: '/logos/logo_mtj.png',
    avatar_alt: 'logo_mtj',
    avatar_width: 155,
    avatar_height: 30,
    sx: { width: { xs: 155 * 0.8, md: 155 }, height: { xs: 30 * 0.8, md: 30 } },
  },
  gomu: {
    avatar_src: '/logos/logo_gomu.svg',
    avatar_alt: 'logo_gomu',
    avatar_width: 119,
    avatar_height: 45,
    sx: { width: { xs: 119 * 0.8, md: 119 }, height: { xs: 45 * 0.8, md: 45 } },
  },
  iix: {
    avatar_src: '/logos/logo_iix.svg',
    avatar_alt: 'logo_iix',
    avatar_width: 63,
    avatar_height: 64,
    sx: { width: { xs: 63 * 0.8, md: 63 }, height: { xs: 64 * 0.8, md: 64 } },
  },
  spiking: {
    avatar_src: '/logos/logo_spiking.svg',
    avatar_alt: 'logo_spiking',
    avatar_width: 89,
    avatar_height: 39,
    sx: { width: { xs: 89 * 0.8, md: 89 }, height: { xs: 39 * 0.8, md: 39 } },
  },
  moh: {
    avatar_src: '/logos/logo_moh.png',
    avatar_alt: 'logo_moh',
    avatar_width: 180,
    avatar_height: 90,
    sx: {
      width: { xs: 180 * 0.8, md: 180 },
      height: { xs: 90 * 0.8, md: 90 },
    },
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
