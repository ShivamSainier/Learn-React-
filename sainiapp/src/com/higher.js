import React from 'react'
import "./style.css"
function Higher(props) {
  const person=props
  const primary=props.primary? 'primary':""

    return (
        <div>
          <h3 className={primary}>I am {person.name} and i am {person.age} years old .</h3>
        </div>
    )
}

export default Higher
