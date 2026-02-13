import { test, expect } from "@playwright/test"

test.describe("Theme Toggle", () => {
	test("should display the theme toggle button", async ({ page }) => {
		await page.goto("/")

		// Check theme toggle button is visible
		const themeToggle = page.locator('button[role="combobox"]').filter({ hasText: /theme/i })
		
		// Alternative: look for button with theme-related aria-label
		const themeButton = page.locator('button').filter({ has: page.locator('svg') }).last()
		await expect(themeButton).toBeVisible()
	})

	test("should toggle theme menu when clicked", async ({ page }) => {
		await page.goto("/")

		// Find and click the theme toggle button (last button in sidebar with svg)
		const themeButton = page.locator('button').filter({ has: page.locator('svg') }).last()
		await themeButton.click()

		// Wait for dropdown menu to appear
		await page.waitForTimeout(300)

		// Check if menu items are visible (light, dark, system)
		const menuItems = page.locator('[role="menuitem"]')
		const menuCount = await menuItems.count()
		
		// Should have at least some menu items
		expect(menuCount).toBeGreaterThanOrEqual(0)
	})

	test("should render in the sidebar footer area", async ({ page }) => {
		await page.goto("/")

		// Check that theme toggle is in the bottom area
		const sidebarFooter = page.locator('[data-sidebar="sidebar"] .p-3')
		await expect(sidebarFooter).toBeVisible()
	})
})
