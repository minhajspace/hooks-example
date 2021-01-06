import React from 'react'

const Button = (props) => {
   console.log(`button component  -- ${props.children} `)
    return (
        <div style={{display:'block'}}>
           <button onClick={props.handleClick}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button)
