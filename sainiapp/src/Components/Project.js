import React from 'react'
import "./Style.css"
import amritsar from "./Proj_img/amritsar.jpg"

function Project(props) {
    
    return (
        <div>
            
            <div className="row">
                <div className="column">
                <div className="card">
                <h3> Hello {props.placename}</h3>
                <img src={props.img} alt="Avatar"  />
                <div className="container">
                <h4><b>about {props.placename}</b></h4>
                <p>{props.desc}</p>
                
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default Project
