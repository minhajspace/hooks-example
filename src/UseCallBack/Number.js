import React from 'react'

const Number = (props) => {
    console.log('counter compoent')
    return (
        <div>
           <h3>{props.number}</h3>
        </div>
    )
}
export default React.memo(Number)
