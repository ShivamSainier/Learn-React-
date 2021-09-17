import React from 'react'
import "./Style.css"
import amritsar from "./Proj_img/amritsar.jpg"

function Project({placename,img,desc}) {
    
    return (
        <div>
            <div className="row">
                <div className="column">
                <div className="card">
                <h3> Hello {placename}</h3>
                <img src={img} alt="Avatar"  />
                <div className="container">
                <h4><b>about {placename}</b></h4>
                <p>{desc}</p>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default Project
