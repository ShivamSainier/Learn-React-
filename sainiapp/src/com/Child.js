import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
               <h2>Child Component</h2> 
               <button onClick={()=>{this.props.click('shivam')}}>Click me </button>
            </div>
        )
    }
}

export default Child
