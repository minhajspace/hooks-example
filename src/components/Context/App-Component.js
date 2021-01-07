import React,{createContext} from 'react'
import ComponenetA from './ComponenetA'
export const NameContext = createContext()

const AppComponent = () => {
   
    
    return (
        <div>
            <NameContext.Provider value={'Minhaj ahmad khan'}>
                <ComponenetA />
            </NameContext.Provider>
    
        </div> 
    )
}

export default AppComponent
