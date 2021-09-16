import React from 'react'

const RefDemo=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )

})

export default RefDemo
