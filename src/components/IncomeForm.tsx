import React, { useState } from 'react';

type IncomeFormProps = {
  handleAddIncome: (income: { source: string; amount: number; date: string }) => void;
};

export function IncomeForm({ handleAddIncome }: IncomeFormProps) {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const income = {
      source,
      amount: parseFloat(amount),
      date,
    };
    handleAddIncome(income);

    // Reset fields
    setSource('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Source:</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Income</button>
    </form>
  );
}