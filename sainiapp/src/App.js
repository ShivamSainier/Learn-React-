import './App.css';
import React from 'react'
import Expenses from './Expense/Expenses';
import Card from './Expense/Card';
import ExpenseForm from './Expense/ExpenseForm';
import NewExpenses from './Expense/NewExpenses';

function App() {
  const expences = [
    { id: 'e1', title: "title1", price: 230, date: new Date(2021, 20, 9) },
    { id: 'e2', title: "title2", price: 240, date: new Date(2021, 20, 10) },
    { id: 'e3', title: "title3", price: 250, date: new Date(2021, 20, 11) },
    { id: 'e4', title: "title4", price: 260, date: new Date(2021, 20, 12) },
    { id: 'e5', title: "title5", price: 280, date: new Date(2021, 20, 1) }
  ]

  return (
    <div>
      <center>
        <NewExpenses />
        <Card data="primary">
          <Expenses title={expences[0].title} price={expences[0].price} date={expences[0].date.toLocaleString()} />
          <Expenses title={expences[1].title} price={expences[1].price} date={expences[1].date.toLocaleString()} />
          <Expenses title={expences[2].title} price={expences[2].price} date={expences[2].date.toLocaleString()} />
          <Expenses title={expences[3].title} price={expences[3].price} date={expences[3].date.toLocaleString()} />
          <Expenses title={expences[4].title} price={expences[4].price} date={expences[4].date.toLocaleString()} />
        </Card>
      </center>

    </div>
  )
}

export default App
