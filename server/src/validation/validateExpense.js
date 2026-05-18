const ALLOWED_CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Other"];

function validateExpense(expenseData) {
  const { title, amount, category } = expenseData;

  if (!title || typeof title !== "string" || title.trim() === "") {
    throw new Error("Title is required");
  }

  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }

  if (!ALLOWED_CATEGORIES.includes(category)) {
    throw new Error(
      `Category must be one of: ${ALLOWED_CATEGORIES.join(", ")}`
    );
  }

  return {
    title: title.trim(),
    amount,
    category,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { validateExpense };