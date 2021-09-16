import React from 'react'
import  ReactDOM  from 'react-dom'

function Portals() {
    return ReactDOM.createPortal (
        <div>
            <h2>Hello World !</h2>
        </div>,
        document.getElementById('shivam')
    )
}

export default Portals
