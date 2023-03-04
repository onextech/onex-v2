import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About Page' and click on it
  await page
    .getByRole('link', { name: 'Go to the about page', exact: true })
    .click()
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/about')
  // The new page should contain a link with "home Page"
  await expect(
    page.getByText('Greetings', {
      exact: true,
    })
  ).toBeVisible()
})
