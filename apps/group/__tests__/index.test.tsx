import React from 'react'
import { render, screen } from '@app/tests'
import Home from '@pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    // @ts-ignore
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'We are One X Group, the Growth Company.',
    })

    expect(heading).toBeInTheDocument()
  })
})
