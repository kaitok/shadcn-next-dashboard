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
		const exampleHeader = page.locator('th:has-text("Example")')

		await expect(statusHeader).toBeVisible()
		await expect(emailHeader).toBeVisible()
		await expect(amountHeader).toBeVisible()
		await expect(exampleHeader).toBeVisible()
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

		// Check for status, email, amount and example cells in first row
		const cells = firstRow.locator("td")
		const cellCount = await cells.count()
		expect(cellCount).toBe(4)
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

		const example = page.locator('td:has-text("Sample A")')
		await expect(example.first()).toBeVisible()
	})

	test("should have proper table styling", async ({ page }) => {
		await page.goto("/")

		// Check table container has border
		const tableContainer = page.locator("div.rounded-md.border")
		await expect(tableContainer).toBeVisible()
	})

	test("should display pagination controls", async ({ page }) => {
		await page.goto("/")

		// Check for pagination info
		const pageInfo = page.locator('text=/Page \\d+ of \\d+/')
		await expect(pageInfo).toBeVisible()

		// Check for pagination buttons
		const previousButton = page.getByRole("button", { name: "Previous" })
		const nextButton = page.getByRole("button", { name: "Next" })

		await expect(previousButton).toBeVisible()
		await expect(nextButton).toBeVisible()

		// On page 1, Previous should be disabled
		await expect(previousButton).toBeDisabled()
	})

	test("should paginate through data", async ({ page }) => {
		await page.goto("/")

		// Check we're on page 1
		const pageInfo = page.locator('text=/Page 1 of/')
		await expect(pageInfo).toBeVisible()

		// Check first page has Sample A
		const sampleA = page.locator('td:has-text("Sample A")')
		await expect(sampleA).toBeVisible()

		// Click Next button
		const nextButton = page.getByRole("button", { name: "Next" })
		await nextButton.click()

		// Wait for page change
		await page.waitForTimeout(500)

		// Check we're on page 2
		const page2Info = page.locator('text=/Page 2 of/')
		await expect(page2Info).toBeVisible()

		// Check second page has Sample K (first item on page 2)
		const sampleK = page.locator('td:has-text("Sample K")')
		await expect(sampleK).toBeVisible()

		// Previous button should now be enabled
		const previousButton = page.getByRole("button", { name: "Previous" })
		await expect(previousButton).toBeEnabled()
	})

	test("should display and work with filter input", async ({ page }) => {
		await page.goto("/")

		// Check filter input exists
		const filterInput = page.getByPlaceholder("Filter all columns...")
		await expect(filterInput).toBeVisible()

		// Type in filter
		await filterInput.fill("success")

		// Wait for filter to apply
		await page.waitForTimeout(500)

		// Check that only success status rows are visible
		const successRows = page.locator('td:has-text("success")')
		const successCount = await successRows.count()
		expect(successCount).toBeGreaterThan(0)

		// Check that non-success statuses are not visible
		const tableRows = page.locator("tbody tr")
		const visibleRowCount = await tableRows.count()

		// All visible rows should contain "success"
		for (let i = 0; i < visibleRowCount; i++) {
			const row = tableRows.nth(i)
			await expect(row).toContainText("success")
		}
	})

	test("should clear filter when input is cleared", async ({ page }) => {
		await page.goto("/")

		const filterInput = page.getByPlaceholder("Filter all columns...")

		// Apply filter
		await filterInput.fill("pending")
		await page.waitForTimeout(500)

		// Clear filter
		await filterInput.clear()
		await page.waitForTimeout(500)

		// Check pagination shows multiple pages again (indicating all data is shown)
		const pageInfo = page.locator('text=/Page 1 of 2/')
		await expect(pageInfo).toBeVisible()
	})
})
