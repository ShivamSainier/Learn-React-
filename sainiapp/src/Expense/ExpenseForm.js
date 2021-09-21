import React, { useState } from 'react'
import "./ExpensesForm.css"

function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const titlehendler = (event) => {
        setTitle(event.target.value)

       
    }

    const amountHendler = (event) => {
       setAmount(event.target.value)
       
    }
    const dateHendler = (event) => {
        setDate(event.target.value)
        
    }
    const submitForm=(event)=>{
        event.preventDefault()
        const data={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        console.log("Form Submitted")
        setTitle('')
        setAmount('')
        setDate('')

    }
    return (
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titlehendler} value={title}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountHendler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2022-01-01" value={date} onChange={dateHendler}></input>
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
