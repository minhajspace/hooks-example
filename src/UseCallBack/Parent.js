import React,{useState,useCallback} from 'react'
import Button from './Button'
import Number from './Number'
import Title from './Title'

const ParentCompoent = () => {
    const [number,setNumber] =useState(0)
    const [numberTwo,setNumberTwo] =useState(0);

   const    handleIncrement = useCallback(()=>{
       setNumber(number + 1 )
   },[number])
   
   const    handleDecrement = useCallback(()=>{
            setNumberTwo(numberTwo - 1)
   },[numberTwo])
   
    
    return (
        <div style={{ height: '300px', width: '600px', border: '1px solid red', background: '#e1f5fe', margin: '20px' }}>
            <Title/>
            <Number number={number} />
            <Button handleClick={handleIncrement}>Increment</Button>
            <Number number={numberTwo} />
            <Button handleClick={handleDecrement}>Decrement</Button> 
        </div>
    )
}
export default ParentCompoent
