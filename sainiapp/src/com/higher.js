import React from 'react'
import "./style.css"
import "./appStyle.css"
import style from "./appStyle.module.css"


function Higher(props) {
  
    return (
        <div>
          <h3 className="error">Hi i am Shivam saini</h3>
          <h3 className={style.success}>Hi i am Shivam saini</h3>
        </div>
    )
}

export default Higher
