import React, { useState } from 'react';
import './App.css';
import { IncomeForm } from './components/IncomeForm';
import ExpenseForm from "./components/ExpenseForm";
import SavingForm from "./components/SavingForm";

type Income = {
  source: string;
  amount: number;
  date: string;
};

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);

  const handleAddIncome = (income: Income) => {
    setIncomes([...incomes, income]);
  };

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <IncomeForm handleAddIncome={handleAddIncome} />
      <ExpenseForm />
       <ul id="saving-list"></ul>
      <SavingForm />
      <ul id="expense-list"></ul>
     
     

      
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            {income.source} - ${income.amount} - {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;