import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shivam"
        }
    }
    
    render() {
        let message;
        if(this.state.name=="shivam"){
            message=<div>Hii {this.state.name}</div>
        }
        else{
            message=<div>hello Guest</div>
        }
        return(
            <div>{message}</div>
            
        )
    }
}   

export default Conditional
