import React from 'react';
import Card from './Card';
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
      key={expense.id}
      title={expense.title}
      price={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className="expenses">{expensesList}</Card>;

  // // with React.createElement
  // return React.createElement(Card, { className: 'expenses' }, expensesList);
}

export default App;
