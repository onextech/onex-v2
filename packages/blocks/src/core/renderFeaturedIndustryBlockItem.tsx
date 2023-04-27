import { Industry } from '@onex/types'

export interface RenderFeaturedIndustryBlockItemProps {
  item: Industry
}

const renderFeaturedIndustryBlockItem = (
  props: RenderFeaturedIndustryBlockItemProps
) => {
  const { item } = props
  const { title, subtitle, fa_icon } = item || {}

  return [
    {
      type: 'fa-icon',
      title: `fa-3x fa-thin ${fa_icon}`,
      titleProps: { sx: { mb: 3 } },
    },
    { type: 'link', title, titleProps: { variant: 'h5' } },
    {
      type: 'body1',
      title: subtitle,
      titleProps: {
        maxLines: 3,
        sx: { mt: 1, mb: 2 },
      },
    },
    {
      type: 'link',
      title: 'Learn more',
      titleProps: { rightCaret: true },
    },
  ]
}

export default renderFeaturedIndustryBlockItem