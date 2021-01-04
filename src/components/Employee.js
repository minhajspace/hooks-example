import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Employee = () => {
    const [employeData ,setemployeData] =useState([])
    useEffect(() => {
        const data = axios.get('https://type.fit/api/quotes').then((res)=>{
         setemployeData(res.data)
         console.log(employeData)
        }).catch((e)=>{
         console.log(e)
        })
    },[])
   
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background:'#e1f5fe'}}>
            <h1>{employeData[0] && employeData[0].text}</h1>
            <h1>By {employeData[0] && employeData[0].author}</h1>
        </div>
    )
}

export default Employee
