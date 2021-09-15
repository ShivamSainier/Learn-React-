import React, { Component,PureComponent } from 'react'
import PureCom from './PureCom'
import RegCom from './RegCom'

class Parent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:9
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
                <RegCom />
                <PureCom />
            </div>
        )
    }
}

export default Parent
