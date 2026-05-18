const { validateExpense } = require("../validation/validateExpense");
const { addExpense, getAllExpenses, deleteExpense } = require("../models/expenseStore");

function createExpense(req, res) {
  try {
    const validated = validateExpense(req.body);
    const expense = addExpense(validated);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

function listExpenses(req, res) {
  res.status(200).json(getAllExpenses());
}

function removeExpense(req, res) {
  const removed = deleteExpense(req.params.id);
  if (!removed) return res.status(404).json({ error: "Expense not found" });
  res.status(200).json(removed);
}

module.exports = { createExpense, listExpenses, removeExpense };