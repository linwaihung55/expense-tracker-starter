# Plan: Delete Transactions

1. **`src/App.jsx`** — add a `handleDelete(id)` callback that filters the transaction out of state:
   ```js
   const handleDelete = (id) => {
     setTransactions(transactions.filter(t => t.id !== id));
   };
   ```
   Pass it to `TransactionList` as `onDelete={handleDelete}`.

2. **`src/TransactionList.jsx`** — accept `onDelete` prop, add an Actions column with a Delete button per row that asks for confirmation first:
   ```jsx
   <td>
     <button onClick={() => {
       if (window.confirm(`Delete "${t.description}"?`)) onDelete(t.id);
     }}>Delete</button>
   </td>
   ```

3. **`src/App.css`** — optional small styling for the delete button (red-ish, consistent with existing classes).

Summary and balance update automatically since `Summary` recomputes from the `transactions` prop.
