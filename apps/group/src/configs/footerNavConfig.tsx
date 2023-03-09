import React from 'react'
import routeConfig from './routeConfig'
import { brands, industries, pages, services } from './navConfig'

const footerNavConfig = [
  {
    key: 'services',
    title: 'Services',
    items: services,
  },
  {
    key: 'industries',
    title: 'Industries',
    items: industries,
  },
  {
    key: 'ecosystem',
    title: 'Ecosystem',
    items: brands,
  },
  {
    key: 'company',
    title: 'Company',
    href: routeConfig.ABOUT,
    items: pages,
  },
]

export default footerNavConfig
