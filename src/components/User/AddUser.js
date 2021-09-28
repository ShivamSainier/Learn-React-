import React,{useState} from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import ErrorModel from '../Ui/ErrorModel';
import classes from "./AddUSer.module.css"

function AddUser(props) {
    const [user,setUser]=useState("")
    const [userage,setAge]=useState("")
    const [error,setError]=useState()


    const AddUserHendler=(event)=>{
        event.preventDefault();
        
        if(user.length===0 || userage===0){
            setError({
                title:'Invalid Input',
                message:'Please Enter Valid name and Age'
            })
            return;
        }
       if(userage.length<10 ){
           setError({
               title:'Invalid Input',
               message:'Please Enter Valid Age (>0)'

           })
           return;
       }
        props.onAddUser(user,userage);
        console.log(user,userage)
        setUser("")
        setAge("")}
    const usernamehendler=(event)=>{
        setUser(event.target.value)
    }
    const agehendler=(event)=>{
        setAge(event.target.value)
    }
    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message}/>}
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
