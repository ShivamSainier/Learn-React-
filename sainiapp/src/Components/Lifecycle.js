import React, { Component } from 'react'
import LifeCycle1 from './LifeCycle1'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shivam"
        }
        console.log("Constructor A is invoked")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("Get Drived State of A is Invoked")
        return null
    }

    componentDidMount(){
        console.log("Component Did Mount -A ")
    }
    componentDidUpdate(){
        console.log("Component Did Update -A")
    }
    shouldComponentUpdate(){
        console.log("Should Component Update -A")
    }

    render() {
        console.log("Render Method is invoked -A")
        return (
            <div>
                Lifecycle
                <LifeCycle1  />
            </div>
        )
    }
}

export default Lifecycle
