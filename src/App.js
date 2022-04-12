import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 297.67,
      date: new Date('March 28, 2022'),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 10),
    },
  ];

  const expensesList = expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      price={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <div className="expenses">
      <h1>Let's get started!</h1>
      {expensesList}
      {/* <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date.toISOString()}
        price={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date.toISOString()}
        price={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date.toISOString()}
        price={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date.toISOString()}
        price={expenses[3].amount}
      /> */}
    </div>
  );
}

export default App;
