const { test, expect } = require("@playwright/test");

// User story 1: As a user, I want to add an expense with a title, amount, and category, so that I can log my spending.
test("user can add an expense and see it in the list", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("title-input").fill("Lunch");
  await page.getByTestId("amount-input").fill("15");
  await page.getByTestId("category-select").selectOption("Food");
  await page.getByTestId("submit-btn").click();

  await expect(page.getByTestId("expense-list")).toContainText("Lunch");
  await expect(page.getByTestId("expense-list")).toContainText("15");
  await expect(page.getByTestId("expense-list")).toContainText("Food");
});

// User story 2: As a user, I want to see all my expenses in a list, so that I can review where my money goes.
test("user can see all their expenses in a list", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("title-input").fill("Groceries");
  await page.getByTestId("amount-input").fill("50");
  await page.getByTestId("category-select").selectOption("Food");
  await page.getByTestId("submit-btn").click();

  await page.getByTestId("title-input").fill("Bus fare");
  await page.getByTestId("amount-input").fill("30");
  await page.getByTestId("category-select").selectOption("Transport");
  await page.getByTestId("submit-btn").click();

  const items = page.getByTestId("expense-item");
  await expect(items).toHaveCount(2);
  await expect(items.nth(0)).toContainText("Groceries");
  await expect(items.nth(1)).toContainText("Bus fare");
});

// User story 3: As a user, I want to remove an expense, so that I can clean up entries I no longer need.
test("user can delete an expense and it is removed from the list", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("title-input").fill("Lunch");
  await page.getByTestId("amount-input").fill("15");
  await page.getByTestId("category-select").selectOption("Food");
  await page.getByTestId("submit-btn").click();

  await expect(page.getByTestId("expense-item")).toHaveCount(1);

  await page.getByTestId("delete-btn").click();

  await expect(page.getByTestId("expense-item")).toHaveCount(0);
});
