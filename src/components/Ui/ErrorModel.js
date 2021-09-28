import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from "./Error.module.css"

function ErrorModel(props) {
    return (
        <div>
        <div className={classes.backdrop} />
        <Card className={classes.modal}>
            <header className={classes.header}><h2>{props.title}</h2> </header>
            <div>
         <p>{props.message}</p>
            </div>
            <footer classNam={classes.actions}><Button>Okey</Button></footer>
        </Card>
        </div>

    )
}

export default ErrorModel