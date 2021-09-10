import React, { Component } from 'react'
import Child from './Child'


class Parent extends Component {
    click(name){
        alert(`hello ${name}`)
    }
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <button onClick={this.click}>Parent</button>
                <Child click={this.click} />
            </div>
        )
    }
}

export default Parent
