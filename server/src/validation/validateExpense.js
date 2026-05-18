const ALLOWED_CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Other"];

function validateRequired(title) {
  if (!title || typeof title !== "string" || title.trim() === "") {
    throw new Error("Title is required");
  }
}

function validatePositiveNumber(amount) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }
}

function validateCategory(category) {
  if (!ALLOWED_CATEGORIES.includes(category)) {
    throw new Error(
      `Category must be one of: ${ALLOWED_CATEGORIES.join(", ")}`
    );
  }
}

function validateExpense(expenseData) {
  const { title, amount, category } = expenseData;

  validateRequired(title);
  validatePositiveNumber(amount);
  validateCategory(category);

  return {
    title: title.trim(),
    amount,
    category,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { validateExpense };