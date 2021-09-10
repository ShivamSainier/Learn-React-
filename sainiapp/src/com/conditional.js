import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shivam"
        }
    }
    
    render() {
        return(
            this.state.name=="shivam"?
            <div>Hii {this.state.name}</div>:
            <div>hello guest</div>
        )
    }
}   

export default Conditional
