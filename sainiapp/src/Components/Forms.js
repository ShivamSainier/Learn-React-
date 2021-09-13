import React, { Component } from 'react'
import style from "./appStyle.module.css"
export class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username:'',
             comments:''
        }
    }
    setUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    setComments=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    formSubmit=(event)=>{
        alert(this.state.username?`username ${this.state.username}`:"")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                    <label>Username </label>
                        <input type="text" value={this.state.username} placeholder="Enter Username" onChange={this.setUsername}></input>
                    </div>
                    <div>
                    <label> Comments </label>
                        <textarea placeholder="Enter Comments" onChange={this.setComments} value={this.state.comments}></textarea>
               </div>
               <input type="submit" value="Submit"></input>
                </form>
                <h3 className={style.error}>{this.state.username}</h3>
                <h4 className={style.success}>{this.state.comments}</h4>
            </div>
        )
    }
}

export default Forms
