import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
	test("should display the main dashboard page", async ({ page }) => {
		await page.goto("/")

		// Check page title
		await expect(page).toHaveTitle(/shadcn-next-dashboard/)

		// Check for DataTable presence
		const table = page.locator("table")
		await expect(table).toBeVisible()
	})

	test("should display table headers correctly", async ({ page }) => {
		await page.goto("/")

		// Check table headers
		const statusHeader = page.locator('th:has-text("Status")')
		const emailHeader = page.locator('th:has-text("Email")')
		const amountHeader = page.locator('th:has-text("Amount")')

		await expect(statusHeader).toBeVisible()
		await expect(emailHeader).toBeVisible()
		await expect(amountHeader).toBeVisible()
	})

	test("should display table data rows", async ({ page }) => {
		await page.goto("/")

		// Check that table has data rows
		const tableRows = page.locator("tbody tr")
		const rowCount = await tableRows.count()
		expect(rowCount).toBeGreaterThan(0)

		// Check first row has data
		const firstRow = tableRows.first()
		await expect(firstRow).toBeVisible()

		// Check for status, email and amount cells in first row
		const cells = firstRow.locator("td")
		const cellCount = await cells.count()
		expect(cellCount).toBe(3)
	})

	test("should display payment data correctly", async ({ page }) => {
		await page.goto("/")

		// Check for specific payment data
		const pendingStatus = page.locator('td:has-text("pending")')
		await expect(pendingStatus.first()).toBeVisible()

		const email = page.locator('td:has-text("m@example.com")')
		await expect(email.first()).toBeVisible()

		const amount = page.locator('td:has-text("100")')
		await expect(amount.first()).toBeVisible()
	})

	test("should have proper table styling", async ({ page }) => {
		await page.goto("/")

		// Check table container has border
		const tableContainer = page.locator("div.rounded-md.border")
		await expect(tableContainer).toBeVisible()
	})
})
