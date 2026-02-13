import { test, expect } from "@playwright/test"

test.describe("Layout and Responsiveness", () => {
	test("should render the root layout correctly", async ({ page }) => {
		await page.goto("/")

		// Check html lang attribute
		const html = page.locator("html")
		await expect(html).toHaveAttribute("lang", "en")
	})

	test("should have main content area", async ({ page }) => {
		await page.goto("/")

		// Check for main content wrapper
		const mainContent = page.locator(".w-full.p-5")
		await expect(mainContent).toBeVisible()
	})

	test("should display sidebar trigger in main content", async ({ page }) => {
		await page.goto("/")

		// Check sidebar trigger is in main content area
		const sidebarTrigger = page.locator('button[data-sidebar="trigger"]')
		await expect(sidebarTrigger).toBeVisible()
	})

	test("should have proper container for data table", async ({ page }) => {
		await page.goto("/")

		// Check for container with proper classes
		const container = page.locator(".container.mx-auto.py-10")
		await expect(container).toBeVisible()
	})

	test("should work on mobile viewport", async ({ page }) => {
		// Set mobile viewport
		await page.setViewportSize({ width: 375, height: 667 })
		await page.goto("/")

		// Check page still loads
		await expect(page).toHaveTitle(/shadcn-next-dashboard/)

		// Check sidebar trigger is visible for mobile
		const sidebarTrigger = page.locator('button[data-sidebar="trigger"]')
		await expect(sidebarTrigger).toBeVisible()

		// Check table is still visible
		const table = page.locator("table")
		await expect(table).toBeVisible()
	})

	test("should work on tablet viewport", async ({ page }) => {
		// Set tablet viewport
		await page.setViewportSize({ width: 768, height: 1024 })
		await page.goto("/")

		// Check page still loads
		await expect(page).toHaveTitle(/shadcn-next-dashboard/)

		// Check sidebar is visible
		const sidebar = page.locator('[data-sidebar="sidebar"]')
		await expect(sidebar).toBeVisible()

		// Check table is visible
		const table = page.locator("table")
		await expect(table).toBeVisible()
	})

	test("should work on desktop viewport", async ({ page }) => {
		// Set desktop viewport
		await page.setViewportSize({ width: 1920, height: 1080 })
		await page.goto("/")

		// Check page still loads
		await expect(page).toHaveTitle(/shadcn-next-dashboard/)

		// Check sidebar is visible
		const sidebar = page.locator('[data-sidebar="sidebar"]')
		await expect(sidebar).toBeVisible()

		// Check table is visible and properly laid out
		const table = page.locator("table")
		await expect(table).toBeVisible()
	})
})
