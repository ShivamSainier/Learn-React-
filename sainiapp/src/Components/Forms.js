import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username:''
        }
    }
    setUsername=(event)=>{
        this.setState(()=>{
            this.setState({
                username:event.target.value      
            })
        })
    }

    render() {
        return (
            <div>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.setUsername}></input>
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}

export default Forms
