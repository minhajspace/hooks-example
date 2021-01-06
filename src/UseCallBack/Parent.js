import React,{useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentCompoent = () => {
    const [age,setAge] =useState(0)

   const    handleIncrement = ()=>{
       setAge(age + 1 )
    }
   const    handleDecrement = () => {
        setAge(age - 1)
    }
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background: '#e1f5fe', margin: '20px' }}>
             <Title/>
            <Count count={age} />
            <Button handleClick={handleIncrement}>Increment Age</Button>
            <Button handleClick={handleDecrement}>Decrement Age</Button> 
        </div>
    )
}

export default ParentCompoent
