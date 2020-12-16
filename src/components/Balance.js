import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const {transactions} =  useContext(GlobalContext)
    const total = transactions.map((item)=>item.amount).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    return (
        <div>
            <h4 >你的余额</h4>
    <h1>${total}</h1>
        </div>
    )
}

export default Balance
