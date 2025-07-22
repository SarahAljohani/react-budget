import { useState } from "react";

const ExpenseForm = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!source || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${source} - ${amount} SAR - ${date}`;
    const list = document.getElementById("expense-list");
    list?.appendChild(li);

    setSource("");
    setAmount("");
    setDate("");
  };

  return (
    <section>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </section>
  );
};

export default ExpenseForm;