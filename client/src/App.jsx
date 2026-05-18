import { useState, useEffect } from "react";
import { fetchExpenses, createExpense, removeExpense } from "./api/expenseApi";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  async function refreshExpenses() {
    const data = await fetchExpenses();
    setExpenses(data);
  }

  useEffect(() => {
    refreshExpenses();
  }, []);

  async function handleAddExpense(expense) {
    await createExpense(expense);
    await refreshExpenses();
  }

  async function handleDeleteExpense(id) {
    await removeExpense(id);
    await refreshExpenses();
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}
