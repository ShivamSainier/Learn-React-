import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        this.cref=null
        this.select=select=>{
            this.cref=select
        }

       this.state={
           name:''
       }
    }
    componentDidMount(){
        if(this.cref){
            this.cref.value=this.state.name
        }
    }
    change=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render() {

        return (
            <div>
             <label>enter Something</label> <br>
             </br>  
             <input type="text" ref={this.inputRef} onChange={this.change}></input><br />
             <input type="text" ref={this.select}></input>
             <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default RefDemo
