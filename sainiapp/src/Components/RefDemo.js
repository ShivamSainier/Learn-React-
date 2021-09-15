import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.value="shel"
    }
    render() {

        return (
            <div>
             <label>enter Something</label> <br>
             </br>  
             <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefDemo
