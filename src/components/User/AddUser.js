import React from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import classes from "./AddUSer.module.css"

function AddUser(props) {
    const AddUserHendler=(event)=>{
        event.preventDefault();
    }
    return (
        <div>
            <Card className={classes.input}>
            <form onSubmit={AddUserHendler}>
                <label htmlFor="">User name</label>
                <input id="username" type="text" />
                <label htmlFor="Age">Age (Years)</label>
                <input type="number" id="age" />
                <Button type="submit"> Add USer</Button>
                
            </form>
            </Card>
        </div>  
    )
}

export default AddUser
