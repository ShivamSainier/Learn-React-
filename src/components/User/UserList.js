import React from 'react'
import Card from '../Ui/Card'
import classes from "./UserList.module.css"


function UserList(props) {
    return (
        <Card>
        <ul>
            {props.users.map((user,index)=>
            <li key={index}>{user.name}({user.age} years old)</li>)}
        </ul>
        </Card>
    )
}

export default UserList
