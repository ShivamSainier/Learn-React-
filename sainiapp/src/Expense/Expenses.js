import React from 'react'
import "./Style.css"

function Expenses(props) {

    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div>year</div>
            <div>Day</div><div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            
        </div>
    )
}

export default Expenses
