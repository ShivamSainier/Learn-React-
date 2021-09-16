import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputref=React.createRef()
        }

    focus(){
        this.inputref.current.focus()
    }

    helloWorld(){
        this.inputref.current.value="Hello World"
    }

    render() {
        return (
            <div>
             <label>enter Something</label> <br>
             </br>  
             <input type="text" ref={this.inputref}></input><br />
             
             <button onClick={()=>{this.helloWorld()}}>Hello World</button>
                         </div>
        )
    }
}

export default RefDemo
