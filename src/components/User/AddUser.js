import React, { useState,useRef } from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import ErrorModel from '../Ui/ErrorModel';
import classes from "./AddUSer.module.css"

function AddUser(props) {
 
    const [error, setError] = useState()
    const inputref=useRef()
    const ageref=useRef()


    const AddUserHendler = (event) => {
        event.preventDefault();
        const user=inputref.current.value
        const userage=ageref.current.value

        if (user.length === 0 || userage === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter Valid name and Age'
            })
            return;
        }
        if (userage.length<1) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter Valid Age (>0)'

            })
            return;
        }
        props.onAddUser(user, userage);
        console.log(user, userage)

    }
    
    

    const errorHendler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onEvent={errorHendler} />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHendler}>
                    <label htmlFor="">User name</label>
                    <input id="username" type="text" ref={inputref} />
                    <label htmlFor="Age">Age (Years)</label>
                    <input type="number" id="age" ref={ageref} />
                    <Button type="submit"> Add USer</Button>

                </form>
            </Card>
        </div>
    )
}

export default AddUser
