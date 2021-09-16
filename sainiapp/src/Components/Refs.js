import React, { Component } from 'react'
import RefDemo from './RefDemo'

class Refs extends Component {
    render() {
        return (
            <div>
                <RefDemo />
                <button onClick={()=>this.focus()}>Click</button>
            </div>
        )
    }
}

export default Refs
