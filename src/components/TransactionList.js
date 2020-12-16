
import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
    const {transactions} =  useContext(GlobalContext)
    console.log(transactions)
    return (
        <div>
        <h3>历史记录</h3>
           <ul  className="list">
               {transactions.map((transactions)=>{
                   return <Transaction key={transactions.id} transactions={transactions}></Transaction>
               })}
               
           </ul>
   </div>
    )
}

export default TransactionList

