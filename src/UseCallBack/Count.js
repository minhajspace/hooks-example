import React from 'react'

const Count = (props) => {
    console.log('counter compoent')
    return (
        <div>
           <h3>{props.count}</h3>
        </div>
    )
}

export default Count
