const { validateExpense } = require("../../server/src/validation/validateExpense");

describe("validateExpense()", () => {
  test("returns a valid expense object when all required fields are present and valid", () => {
    const expense = validateExpense({
      title: "Lunch",
      amount: 15,
      category: "Food",
    });

    expect(expense).toHaveProperty("title", "Lunch");
    expect(expense).toHaveProperty("amount", 15);
    expect(expense).toHaveProperty("category", "Food");
    expect(expense).toHaveProperty("createdAt");
    expect(Date.parse(expense.createdAt)).not.toBeNaN();
  });

  test("throws an error when title is empty", () => {
    expect(() =>
      validateExpense({ title: "", amount: 10, category: "Food" }),
    ).toThrow("Title is required");
  });

  test("throws an error when amount is not a positive number", () => {
    expect(() =>
      validateExpense({ title: "Lunch", amount: -5, category: "Food" }),
    ).toThrow("Amount must be a positive number");
  });

  test("throws an error when category is not in the allowed list", () => {
    expect(() =>
      validateExpense({
        title: "Lunch",
        amount: 10,
        category: "Investments",
      }),
    ).toThrow(
      "Category must be one of: Food, Transport, Utilities, Entertainment, Other",
    );
  });
});
