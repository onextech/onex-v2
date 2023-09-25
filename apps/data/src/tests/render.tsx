import { render } from '@testing-library/react'

import TestProvider from './TestProvider'

import '@testing-library/jest-dom'

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: TestProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
