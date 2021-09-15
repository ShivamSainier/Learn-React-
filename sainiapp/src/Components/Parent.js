import React, { Component } from 'react'
import Memo from './Memo';


class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'saini'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'shivam'
            })
        }, 1000);
    }
    
    render() {
        console.log("*******Parent Component*************")
        return (
            <div>
                <Memo name={this.state.name} />
            </div>
        )
    }
}

export default Parent
