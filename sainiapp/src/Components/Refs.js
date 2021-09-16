import React, { Component } from 'react'
import RefDemo from './RefDemo'

class Refs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.input=React.createRef()
    }
    focus(){
        this.input.current.value="Hello world"
    }
    
    render() {
        return (
            <div>
                <RefDemo ref={this.input}/>
                <button onClick={()=>this.focus()}>Click</button>
            </div>
        )
    }
}

export default Refs
