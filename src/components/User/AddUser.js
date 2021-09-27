import React,{useState} from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import classes from "./AddUSer.module.css"

function AddUser(props) {
    const [user,setUser]=useState("")
    const [userage,setAge]=useState("")


    const AddUserHendler=(event)=>{
        event.preventDefault();
        props.onAddUser(user,userage);
        console.log(user,userage)
    }
    const usernamehendler=(event)=>{
        setUser(event.target.value)
    }
    const agehendler=(event)=>{
        setAge(event.target.value)
    }
    return (
        <div>
            <Card className={classes.input}>
            <form onSubmit={AddUserHendler}>
                <label htmlFor="">User name</label>
                <input id="username" type="text" onChange={usernamehendler} value={user} />
                <label htmlFor="Age">Age (Years)</label>
                <input type="number" id="age"  onChange={agehendler} value={userage}/>
                <Button type="submit"> Add USer</Button>
                
            </form>
            </Card>
            
        </div>  
    )
}

export default AddUser
