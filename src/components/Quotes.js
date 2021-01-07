import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Quotes = () => {
    const [quotes ,setQuotes] =useState([])
    useEffect(() => {
         axios.get('https://type.fit/api/quotes').then((res)=>{
         setQuotes(res.data)
        }).catch((e)=>{
         console.log(e)
        })
    },[])
    const  random = Math.floor(Math.random() * quotes.length)
    return (
        <div style={{ height: '200px', width: '600px', border: '1px solid red', background:'#e1f5fe',margin:'20px'}}>
            <h1>{quotes[0] && quotes[random].text}</h1>
            <h1>By {quotes[0] && quotes[random].author}</h1>
        </div>
    )
}

export default Quotes
