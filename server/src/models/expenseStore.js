const { randomUUID } = require("crypto");

const expenses = [];

function addExpense(validatedData) {
  const expense = { id: randomUUID(), ...validatedData };
  expenses.push(expense);
  return expense;
}

function getAllExpenses() {
  return [...expenses];
}

function deleteExpense(id) {
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return null;
  const [removed] = expenses.splice(index, 1);
  return removed;
}

module.exports = { addExpense, getAllExpenses, deleteExpense };