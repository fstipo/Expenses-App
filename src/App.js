import React, { useState } from 'react';
import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

function App() {
  const [filteredYear, setFilteredYear] = useState('2019');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

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

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  };

  const expensesList = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      price={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesList}
      </Card>
    </>
  );
}

export default App;
