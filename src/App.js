import React, { useState } from 'react';
import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList';

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2022');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filterExpenses} />
      </Card>
    </>
  );
}

export default App;
