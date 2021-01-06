import React,{useState,createContext} from 'react'
import ComponenetA from './ComponenetA'
export const NameContext = createContext()

const AppComponent = () => {
    // const [name,setName]=useState("Minhaj ahmad khan")
    
    return (
        <div>
            <NameContext.Provider value={'Minhaj ahmad khan'}>
                <ComponenetA />
            </NameContext.Provider>
    
        </div> 
    )
}

export default AppComponent
