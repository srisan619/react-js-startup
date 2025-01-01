import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "House Insurance",
      amount: 40,
      date: new Date(2024, 12, 23)
    },
    {
      id: 'e2',
      title: "Health Insurance",
      amount: 200,
      date: new Date(2024, 12, 24)
    },
    {
      id: 'e3',
      title: "Fiber broadband",
      amount: 60,
      date: new Date(2024, 12, 25)
    },
    {
      id: 'e4',
      title: "Maintenace",
      amount: 180,
      date: new Date(2024, 12, 26)
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
