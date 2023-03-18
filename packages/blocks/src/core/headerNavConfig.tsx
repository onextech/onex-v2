import React from 'react'
import { Blocks, Block } from '@gravis-os/landing'
import { brands, systemConfig } from '@onex/common'
import renderHeaderMenuBlockItem from './renderHeaderMenuBlockItem'
import renderHeaderMenuMobileBlockItem from './renderHeaderMenuMobileBlockItem'

const commonGridProps = { spacing: 0 }
const commonLeftGridItemProps = { md: 4, lg: 3 }
const commonRightGridItemProps = { md: 8, lg: 9 }

const { isOpenOnHover } = systemConfig

const headerNavConfig = [
  {
    key: 'ecosystem',
    title: 'Ecosystem',
    fullWidth: true,
    isOpenOnHover,
    items: brands.map((brand) => ({
      key: brand.title,
      title: <Block {...renderHeaderMenuMobileBlockItem(brand)} />,
    })),
    renderItems: ({ popupState }) => {
      return (
        <Blocks
          items={[
            {
              key: 'grid',
              pt: { xs: 10, md: 5 },
              pb: 6,
              reveal: false,
              sx: { backgroundColor: 'background.paper' },
              items: [
                {
                  type: 'grid',
                  gridProps: commonGridProps,
                  gridItems: [
                    {
                      ...commonLeftGridItemProps,
                      items: [
                        {
                          type: 'h5',
                          title: 'Our Ecosystem',
                          titleProps: { gutterBottom: true },
                        },
                        {
                          type: 'body1',
                          title: 'Learn more about how we function.',
                          titleProps: {
                            color: 'text.secondary',
                            maxWidth: true,
                          },
                        },
                      ],
                    },
                    {
                      ...commonRightGridItemProps,
                      items: [
                        {
                          type: 'grid',
                          gridProps: { spacing: 2 },
                          gridItemProps: { xs: 6, md: 6, lg: 4 },
                          gridItems: brands.map((brand) =>
                            renderHeaderMenuBlockItem(brand)
                          ),
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ]}
        />
      )
    },
  },
]

export default headerNavConfig
