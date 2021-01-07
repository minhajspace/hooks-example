import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] =useState(0)
   const handleIncrement = ()=>{
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div style={{border:'1px solid black',width:'200px',height:'150px'}}>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>  
        </div>
    )
}
export default Counter
