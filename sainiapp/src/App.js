import './App.css';
import React from 'react'
import Expenses from './Expense/Expenses';
import Card from './Expense/Card';
import ExpenseForm from './Expense/ExpenseForm';
import NewExpenses from './Expense/NewExpenses';
import ExpensesFilter from './Expense/ExpensesFilter';

function App() {
  const expences = [
    { id: 'e1', title: "title1", price: 230, date: new Date(2021, 20, 9) },
    { id: 'e2', title: "title2", price: 240, date: new Date(2021, 20, 10) },
    { id: 'e3', title: "title3", price: 250, date: new Date(2021, 20, 11) },
    { id: 'e4', title: "title4", price: 260, date: new Date(2021, 20, 12) },
    { id: 'e5', title: "title5", price: 280, date: new Date(2021, 20, 1) }
  ]
  const addExpenseHendler=(data)=>{
    const newdata={
      ...data
    }
    console.log("In the App.js Class")
    console.log(data)
  }

  return (
    <div>
      <center>
        <NewExpenses addExpense={addExpenseHendler} />
        <Card data="primary">
          <ExpensesFilter />
          {
expences.map((expense)=>
(<Expenses title={expense.title} price={expense.price} date={expense.date.toLocaleDateString()} />))
          }
            
            
        </Card>
      </center>

    </div>
  )
}

export default App
