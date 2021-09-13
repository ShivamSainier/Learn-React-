import React, { Component } from 'react'

class LifeCycle1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'saini'
        }
        console.log("Constructor of B is invoked")
    }
    static getDrivedStateFromProps(props,state){
        console.log("Get Drived state -B")
    }
    shouldComponentUpdate(){
        console.log("Should Component Update - B")
        const change=this.props.name?true:false
        return change
    }

    update=()=>{
        this.setState({
            name:'shivam'
        })}

    componentDidUpdate(){
        console.log("Component Did Update -B")
    }

   
    
    
    render() {
        console.log("Render is Invoked -B")
        return (
            <div>
                lifecycle 1 
                <button onClick={this.update}>Click me</button>
                {this.state.name}
            </div>
        )
    }
    componentDidMount(){
        console.log("Component did mount -B")
    }
}

export default LifeCycle1
