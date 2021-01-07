import React,{useContext} from 'react'
import {NameContext} from './App-Component';

const ComponentE = () => {
    const userName = useContext(NameContext)
    return (<div style={{ height: '200px', width: '600px', border: '1px solid red', background: '#e1f5fe' ,margin:'20px'}}>
        <h1>useContext Example</h1>
        <h3> hello My Name is  {userName} </h3> 
    </div> )
}
export default ComponentE
