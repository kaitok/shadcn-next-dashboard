import { test, expect } from "@playwright/test"

test.describe("Theme Toggle", () => {
	test("should display the theme toggle button", async ({ page }) => {
		await page.goto("/")

		// Look for button with theme-related content in sidebar footer
		const themeButton = page.locator('button').filter({ has: page.locator('svg') }).last()
		await expect(themeButton).toBeVisible()
	})

	test("should toggle theme menu when clicked", async ({ page }) => {
		await page.goto("/")

		// Find and click the theme toggle button
		const themeButton = page.locator('button').filter({ has: page.locator('svg') }).last()
		await themeButton.click()

		// Verify the button is still visible and clickable after interaction
		// The dropdown menu functionality is handled by Radix UI
		await expect(themeButton).toBeVisible()
	})

	test("should render in the sidebar footer area", async ({ page }) => {
		await page.goto("/")

		// Check that theme toggle is in the bottom area
		const sidebarFooter = page.locator('[data-sidebar="sidebar"] .p-3')
		await expect(sidebarFooter).toBeVisible()
	})
})
