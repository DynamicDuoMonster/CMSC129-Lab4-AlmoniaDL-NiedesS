import { useState } from "react";

const CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Other"];

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function resetForm() {
    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onAddExpense({ title, amount: Number(amount), category });
    resetForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="title-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        data-testid="amount-input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        data-testid="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button data-testid="submit-btn" type="submit">
        Add Expense
      </button>
    </form>
  );
}
