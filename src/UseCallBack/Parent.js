import React,{useState} from 'react'
import Button from './Button'
import Number from './Number'
import Title from './Title'

const ParentCompoent = () => {
    const [number,setAge] =useState(0)

   const    handleIncrement = ()=>{
       setAge(number + 1 )
    }
   const    handleDecrement = () => {
        setAge(number - 1)
    }
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background: '#e1f5fe', margin: '20px' }}>
            <Title/>
            <Number number={number} />
            <Button handleClick={handleIncrement}>Increment</Button>
            <Button handleClick={handleDecrement}>Decrement</Button> 
        </div>
    )
}
export default ParentCompoent
