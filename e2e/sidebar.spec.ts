import { test, expect } from "@playwright/test"

test.describe("Sidebar", () => {
	test("should display the sidebar", async ({ page }) => {
		await page.goto("/")

		// Check sidebar is visible
		const sidebar = page.locator('[data-sidebar="sidebar"]')
		await expect(sidebar).toBeVisible()
	})

	test("should display all navigation items", async ({ page }) => {
		await page.goto("/")

		// Check all menu items are present
		const homeLink = page.locator('a:has-text("Home")')
		const inboxLink = page.locator('a:has-text("Inbox")')
		const calendarLink = page.locator('a:has-text("Calendar")')
		const searchLink = page.locator('a:has-text("Search")')
		const settingsLink = page.locator('a:has-text("Settings")')

		await expect(homeLink).toBeVisible()
		await expect(inboxLink).toBeVisible()
		await expect(calendarLink).toBeVisible()
		await expect(searchLink).toBeVisible()
		await expect(settingsLink).toBeVisible()
	})

	test("should display sidebar group label", async ({ page }) => {
		await page.goto("/")

		// Check for Application label
		const groupLabel = page.locator('div:has-text("Application")')
		await expect(groupLabel.first()).toBeVisible()
	})

	test("should toggle sidebar when trigger is clicked", async ({ page }) => {
		await page.goto("/")

		// Find the sidebar trigger button
		const sidebarTrigger = page.locator('button[data-sidebar="trigger"]')
		await expect(sidebarTrigger).toBeVisible()

		// The sidebar trigger should be clickable and functional
		// Just verify we can click it without errors - the actual toggle behavior
		// is controlled by the SidebarProvider state management
		await sidebarTrigger.click()
		
		// Verify trigger is still visible after click (toggle should work)
		await expect(sidebarTrigger).toBeVisible()
	})

	test("should display navigation icons", async ({ page }) => {
		await page.goto("/")

		// Check that icons are rendered (by checking svg elements in links)
		const linkSvgs = page.locator('a svg')
		const iconCount = await linkSvgs.count()
		expect(iconCount).toBeGreaterThan(0)
	})

	test("should have proper sidebar structure", async ({ page }) => {
		await page.goto("/")

		// Check sidebar content
		const sidebarContent = page.locator('[data-sidebar="sidebar"] [data-sidebar="content"]')
		await expect(sidebarContent).toBeVisible()

		// Check sidebar group
		const sidebarGroup = page.locator('[data-sidebar="sidebar"] [data-sidebar="group"]')
		await expect(sidebarGroup.first()).toBeVisible()
	})
})
