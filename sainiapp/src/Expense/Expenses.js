import React,{useState} from 'react'
import "./Style.css"

function Expenses(props) {
    const [value,setValue]=useState(0)
    console.log("Component Render ")
    let title=props.title
    const click=()=>{
       setValue(value+1)
    }
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div>year</div>
            <div>Day</div><div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            
        </div>
    )
}

export default Expenses
