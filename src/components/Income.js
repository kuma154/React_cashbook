import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Income = () => {
    const {transactions} =  useContext(GlobalContext)
    let minus=null
    let plus = null

    transactions.filter((item)=>{
        return item.amount < 0
    }).map((item)=>{
        return minus+=item.amount
    })

    transactions.filter((item)=>{
        return item.amount > 0
    }).map((item)=>{
        return plus+=item.amount
    })

    console.log(minus)
    console.log(plus)
    console.log(transactions)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>收入</h4>
          <p className="money plus">+${plus}</p>
        </div>
        <div>
          <h4>支出</h4>
          <p className="money minus">-${Math.abs(minus)}</p>
        </div>
      </div>
    )
}

export default Income
