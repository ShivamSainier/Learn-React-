import React from 'react'
import ReactDOM  from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from "./Error.module.css"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm} />
    )
}

const Model = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}><h2>{props.title}</h2> </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}><Button onClick={props.onEvent}>Okey</Button></footer>
        </Card>
    )
}

function ErrorModel(props) {
    return (
        <>
            {
                ReactDOM.createPortal(<Backdrop />,document.getElementById('backdrop-root'))
            }

            {
                ReactDOM.createPortal(<Model title={props.title} message={props.message} onEvent={props.onEvent}/>, document.getElementById('model-root'))
            }
        </>
    )
}

export default ErrorModel
