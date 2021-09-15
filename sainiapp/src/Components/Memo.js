import React from 'react'

function Memo(props) {
    return (
        <div>
            {props.name}
            <h1>Hello world</h1>
        </div>
    )
}

export default React.memo(Memo)  
