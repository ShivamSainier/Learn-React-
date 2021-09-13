import React, { Component } from 'react'

class LifeCycle1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'shivam'
        }
        console.log("Constructor of B is invoked")
    }
    static getDrivedStateFromProps(props,state){
        console.log("Get Drived state -B")
    }
    
    render() {
        console.log("Render is Invoked -B")
        return (
            <div>
                lifecycle 1
            </div>
        )
    }
    componentDidMount(){
        console.log("Component did mount -B")
    }
}

export default LifeCycle1
