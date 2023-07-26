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
  stanfordmed: {
    avatar_src: '/logos/logo_stanfordmed.png',
    avatar_alt: 'logo_stanfordmed',
    avatar_width: 150,
    avatar_height: 40,
    sx: {
      width: { xs: 150 * 0.8, md: 150 },
      height: { xs: 40 * 0.8, md: 40 },
    },
  },
  geh: {
    avatar_src: '/logos/logo_geh.png',
    avatar_alt: 'logo_geh',
    avatar_width: 280,
    avatar_height: 175,
    sx: {
      width: { xs: 280 * 0.8, md: 280 },
      height: { xs: 175 * 0.8, md: 175 },
    },
  },
  hai: {
    avatar_src: '/logos/logo_hai.png',
    avatar_alt: 'logo_hai',
    avatar_width: 100,
    avatar_height: 100,
    sx: {
      width: { xs: 100 * 0.6, md: 100 },
      height: { xs: 100 * 0.6, md: 100 },
    },
  },
  hms: {
    avatar_src: '/logos/logo_hms.png',
    avatar_alt: 'logo_hms',
    avatar_width: 110,
    avatar_height: 72,
    sx: {
      width: { xs: 110 * 0.8, md: 110 },
      height: { xs: 72 * 0.8, md: 72 },
    },
  },
  ideo: {
    avatar_src: '/logos/logo_ideo.png',
    avatar_alt: 'logo_ideo',
    avatar_width: 95,
    avatar_height: 30,
    sx: {
      width: { xs: 95 * 0.8, md: 95 },
      height: { xs: 30 * 0.8, md: 30 },
    },
  },
  nih: {
    avatar_src: '/logos/logo_nih.png',
    avatar_alt: 'logo_nih',
    avatar_width: 79,
    avatar_height: 61,
    sx: { width: { xs: 79 * 0.8, md: 79 }, height: { xs: 61 * 0.8, md: 61 } },
  },
  prova: {
    avatar_src: '/logos/logo_prova.png',
    avatar_alt: 'logo_prova',
    avatar_width: 110,
    avatar_height: 40,
    sx: { width: { xs: 110 * 0.8, md: 110 }, height: { xs: 40 * 0.8, md: 40 } },
  },
  roche: {
    avatar_src: '/logos/logo_roche.png',
    avatar_alt: 'logo_roche',
    avatar_width: 90,
    avatar_height: 50,
    sx: { width: { xs: 90 * 0.8, md: 90 }, height: { xs: 50 * 0.8, md: 50 } },
  },
  skydeck: {
    avatar_src: '/logos/logo_skydeck.png',
    avatar_alt: 'logo_skydeck',
    avatar_width: 115,
    avatar_height: 40,
    sx: {
      width: { xs: 115 * 0.8, md: 115 },
      height: { xs: 40 * 0.8, md: 40 },
    },
  },
  telegartner: {
    avatar_src: '/logos/logo_telegartner.png',
    avatar_alt: 'logo_telegartner',
    avatar_width: 130,
    avatar_height: 50,
    sx: {
      width: { xs: 130 * 0.8, md: 130 },
      height: { xs: 50 * 0.8, md: 50 },
    },
  },
  kramer: {
    avatar_src: '/logos/logo_kramer.png',
    avatar_alt: 'logo_kramer',
    avatar_width: 145,
    avatar_height: 45,
    sx: {
      width: { xs: 145 * 0.8, md: 145 },
      height: { xs: 45 * 0.8, md: 45 },
    },
  },
  bedea: {
    avatar_src: '/logos/logo_bedea.png',
    avatar_alt: 'logo_bedea',
    avatar_width: 110,
    avatar_height: 30,
    sx: {
      width: { xs: 110 * 0.8, md: 110 },
      height: { xs: 30 * 0.8, md: 30 },
    },
  },
  dorrough: {
    avatar_src: '/logos/logo_dorrough.png',
    avatar_alt: 'logo_dorrough',
    avatar_width: 140,
    avatar_height: 33,
    sx: {
      width: { xs: 140 * 0.8, md: 140 },
      height: { xs: 33 * 0.8, md: 33 },
    },
  },
  weller: {
    avatar_src: '/logos/logo_weller.png',
    avatar_alt: 'logo_weller',
    avatar_width: 105,
    avatar_height: 28,
    sx: {
      width: { xs: 105 * 0.8, md: 105 },
      height: { xs: 28 * 0.8, md: 28 },
    },
  },
  erem: {
    avatar_src: '/logos/logo_erem.png',
    avatar_alt: 'logo_erem',
    avatar_width: 84,
    avatar_height: 23,
    sx: {
      width: { xs: 84 * 0.8, md: 84 },
      height: { xs: 23 * 0.8, md: 23 },
    },
  },
  xcelite: {
    avatar_src: '/logos/logo_xcelite.png',
    avatar_alt: 'logo_xcelite',
    avatar_width: 85,
    avatar_height: 34,
    sx: {
      width: { xs: 85 * 0.8, md: 85 },
      height: { xs: 34 * 0.8, md: 34 },
    },
  },
  pressmaster: {
    avatar_src: '/logos/logo_pressmaster.png',
    avatar_alt: 'logo_pressmaster',
    avatar_width: 135,
    avatar_height: 30,
    sx: {
      width: { xs: 135 * 0.8, md: 135 },
      height: { xs: 30 * 0.8, md: 30 },
    },
  },
  fischer: {
    avatar_src: '/logos/logo_fischer.png',
    avatar_alt: 'logo_fischer',
    avatar_width: 80,
    avatar_height: 32,
    sx: {
      width: { xs: 80 * 0.8, md: 80 },
      height: { xs: 32 * 0.8, md: 32 },
    },
  },
  blackmagic: {
    avatar_src: '/logos/logo_blackmagic.png',
    avatar_alt: 'logo_blackmagic',
    avatar_width: 150,
    avatar_height: 53,
    sx: {
      width: { xs: 150 * 0.8, md: 150 },
      height: { xs: 53 * 0.8, md: 53 },
    },
  },
  muxlab: {
    avatar_src: '/logos/logo_muxlab.png',
    avatar_alt: 'logo_muxlab',
    avatar_width: 127,
    avatar_height: 36,
    sx: {
      width: { xs: 127 * 0.8, md: 127 },
      height: { xs: 36 * 0.8, md: 36 },
    },
  },
  cwc: {
    avatar_src: '/logos/logo_cwc.png',
    avatar_alt: 'logo_cwc',
    avatar_width: 120,
    avatar_height: 40,
    sx: {
      width: { xs: 120 * 0.8, md: 120 },
      height: { xs: 40 * 0.8, md: 40 },
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
  pick(MOCK_CLIENT_LOGOS_OBJECT, [
    'gic',
    'uob',
    'julius_bar',
    'iix',
    'tyme',
    'gomu',
    'spiking',
  ])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

export const MOCK_GOVX_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, ['gic', 'mpa', 'pa', 'ssa', 'imo', 'moh'])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

export const MOCK_DESIGN_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_DATA_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_DIGITAL_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS

export const MOCK_AEL_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, [
    'geh',
    'hms',
    'stanfordmed',
    'roche',
    'hai',
    'ideo',
    'nih',
    'prova',
    'skydeck',
  ])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))
export const MOCK_SRI_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS
export const MOCK_GVS_CLIENT_LOGOS = MOCK_GROUP_CLIENT_LOGOS
export const MOCK_COASTAL_CLIENT_LOGOS = Object.values(
  pick(MOCK_CLIENT_LOGOS_OBJECT, [
    'muxlab',
    'kramer',
    'erem',
    'xcelite',
    'weller',
    'pressmaster',
    'dorrough',
    'bedea',
    'blackmagic',
    'fischer',
    'telegartner',
    'cwc',
  ])
).map((item: Record<string, unknown>, i) => ({ ...item, id: i }))

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
