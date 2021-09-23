import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpenses.css"

function NewExpenses(props) {
    const ExpenseData = (expense) => {
        const data = {
            ...expense
        }
        props.addExpense(data)

    }
    return (
        <div className="new-expense">
            <ExpenseForm onAddForm={ExpenseData} />
        </div>
    )
}

export default NewExpenses
