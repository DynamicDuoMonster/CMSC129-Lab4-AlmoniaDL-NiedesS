const express = require("express");
const { validateExpense } = require("../validation/validateExpense");
const { addExpense, getAllExpenses, deleteExpense } = require("../models/expenseStore");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const validated = validateExpense(req.body);
    const expense = addExpense(validated);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.status(200).json(getAllExpenses());
});

router.delete("/:id", (req, res) => {
  const removed = deleteExpense(req.params.id);
  if (!removed) return res.status(404).json({ error: "Expense not found" });
  res.status(200).json(removed);
});

module.exports = router;