import React from 'react'

import dynamic from 'next/dynamic'

const DynamicTypography = dynamic(() => import('./Typography'))

const withSubtitle = (props) => (children) => {
  const { subtitle, ...rest } = props
  const subtitleProps = { ...rest }

  if (!subtitle) return children

  return (
    <>
      {children}
      <DynamicTypography
        color="text.secondary"
        fontWeight="normal"
        mt={1}
        variant="body2"
        {...subtitleProps}
      >
        {subtitle}
      </DynamicTypography>
    </>
  )
}

export default withSubtitle
