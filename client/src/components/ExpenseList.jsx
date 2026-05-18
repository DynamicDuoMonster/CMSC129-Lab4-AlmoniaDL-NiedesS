export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div data-testid="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} data-testid="expense-item">
          <span>{expense.title} — </span>
          <span>{expense.amount} — </span>
          <span>{expense.category}</span>
          <button
            data-testid="delete-btn"
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
