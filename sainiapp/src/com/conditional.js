import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shivam"
        }
    }
    
    render() {
        if(this.state.name=="shivam"){
            return(
                <div>
                    <h2>Hii {this.state.name}</h2>
                </div>
            )

        }
        else{
            return(
                <div>
                    <h2>Hello Guest</h2>
                </div>
            )
        }
    }
}   

export default Conditional
