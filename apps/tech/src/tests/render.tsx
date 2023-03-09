import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TestProvider from './TestProvider'

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: TestProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
