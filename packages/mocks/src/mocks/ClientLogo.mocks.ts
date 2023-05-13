import pick from 'lodash/pick'

const MOCK_CLIENT_LOGOS_OBJECT = {
  gic: {
    avatar_src: '/logos/logo_gic.svg',
    avatar_alt: 'logo_gic',
    avatar_width: 105,
    avatar_height: 53,
  },
  uob: {
    avatar_src: '/logos/logo_uob.png',
    avatar_alt: 'logo_uob',
    avatar_width: 104,
    avatar_height: 30,
  },
  julius_bar: {
    avatar_src: '/logos/logo_julius_bar.png',
    avatar_alt: 'logo_julius_bar',
    avatar_width: 144,
    avatar_height: 28,
  },
  canon: {
    avatar_src: '/logos/logo_canon.png',
    avatar_alt: 'logo_canon',
    avatar_width: 125,
    avatar_height: 27,
  },
  ssa: {
    avatar_src: '/logos/logo_ssa.png',
    avatar_alt: 'logo_ssa',
    avatar_width: 130,
    avatar_height: 30,
  },
  imo: {
    avatar_src: '/logos/logo_imo.svg',
    avatar_alt: 'logo_imo',
    avatar_width: 162,
    avatar_height: 32,
  },
  mpa: {
    avatar_src: '/logos/logo_mpa.svg',
    avatar_alt: 'logo_mpa',
    avatar_width: 70,
    avatar_height: 73,
  },
  pa: {
    avatar_src: '/logos/logo_pa.svg',
    avatar_alt: 'logo_pa',
    avatar_width: 64,
    avatar_height: 76,
  },
  sri: {
    avatar_src: '/logos/logo_sri.svg',
    avatar_alt: 'logo_sri',
    avatar_width: 90,
    avatar_height: 38,
  },
  suntec: {
    avatar_src: '/logos/logo_suntec.svg',
    avatar_alt: 'logo_suntec',
    avatar_width: 110,
    avatar_height: 70,
  },
  tsl: {
    avatar_src: '/logos/logo_tsl.svg',
    avatar_alt: 'logo_tsl',
    avatar_width: 100,
    avatar_height: 100,
  },
  tyme: {
    avatar_src: '/logos/logo_tyme.svg',
    avatar_alt: 'logo_tyme',
    avatar_width: 99,
    avatar_height: 59,
  },
  tvs: {
    avatar_src: '/logos/logo_tvs.svg',
    avatar_alt: 'logo_tvs',
    avatar_width: 140,
    avatar_height: 26.4,
  },
  dxd: {
    avatar_src: '/logos/logo_dxd.png',
    avatar_alt: 'logo_dxd',
    avatar_width: 119,
    avatar_height: 45,
  },
  mtj: {
    avatar_src: '/logos/logo_mtj.png',
    avatar_alt: 'logo_mtj',
    avatar_width: 155,
    avatar_height: 30,
  },
  gomu: {
    avatar_src: '/logos/logo_gomu.svg',
    avatar_alt: 'logo_gomu',
    avatar_width: 119,
    avatar_height: 45,
  },
  iix: {
    avatar_src: '/logos/logo_iix.svg',
    avatar_alt: 'logo_iix',
    avatar_width: 63,
    avatar_height: 64,
  },
  spiking: {
    avatar_src: '/logos/logo_spiking.svg',
    avatar_alt: 'logo_spiking',
    avatar_width: 89,
    avatar_height: 39,
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

export const MOCK_CLIENT_LOGOS = {
  GROUP: MOCK_GROUP_CLIENT_LOGOS,
  TECH: MOCK_TECH_CLIENT_LOGOS,
}
