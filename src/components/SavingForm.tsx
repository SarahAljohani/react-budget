import { useState } from "react";

const SavingForm = () => {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!goal || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const li = document.createElement("li");
    li.textContent =  `${goal} - ${amount} SAR - ${date}`;
    const list = document.getElementById("saving-list");
    list?.appendChild(li);

    setGoal("");
    setAmount("");
    setDate("");
  };

  return (
    <section>
      <h2>Add Saving Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Saving Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
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
        <button type="submit">Add Saving</button>
      </form>
    </section>
  );
};

export default SavingForm;