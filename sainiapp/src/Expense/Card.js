import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className="primary">
            {props.children}
        </div>
    )
}

export default Card
