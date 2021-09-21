import React,{useState} from 'react'
import "./ExpensesForm.css"

function ExpenseForm() {
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const [date,setDate]=useState("")
    

    const titlehendler=(event)=>{
        setTitle:event.target.value
    }
    
    const amountHendler=(event)=>{
        setAmount:event.target.value
    }
    const dateHendler=(event)=>{
       setDate:event.target.value
    }
    return (
       <form>
           <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input type="text" onChange={titlehendler}></input>
                   </div>
                   <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" min="0.01" step="0.01" onChange={amountHendler}></input>
                   </div>
                   <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" min="2021-01-01" max="2022-01-01" onChange={dateHendler}></input>
                   </div>

           </div>
           <div className="new_expense__actions">
               <button type="submit">Add Expense</button>
           </div>
       </form>
    )
}

export default ExpenseForm
