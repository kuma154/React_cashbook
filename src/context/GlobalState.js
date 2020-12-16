import React,{createContext,useReducer} from 'react'
import {AppReducer} from '../recucer/AppReducer'


const initialState={
    transactions:[
        {id:1,text:'鲜花',amount:-20},
        {id:2,text:'薪水',amount:+300},
        {id:3,text:'鲜花',amount:-20},
        {id:4,text:'红包',amount:+150},
    ]
}
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    return (
       <GlobalContext.Provider value={{transactions:state.transactions,dispatch}}>
           {children}
       </GlobalContext.Provider>
    )
}

export default GlobalProvider
