import React from 'react'

import { render, screen } from '@app/tests'
import Home from '@pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    // @ts-ignore
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Invest in Digital Transformation with Confidence.',
    })

    expect(heading).toBeInTheDocument()
  })
})
