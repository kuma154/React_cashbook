import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transactions }) => {
    const {dispatch} = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+'
    const signclass = transactions.amount < 0 ? 'minus' : 'plus'
    return (
        <li className={signclass} >
            {transactions.text}<span>{sign}${Math.abs(transactions.amount)}</span>
            <button onClick={()=>dispatch({type:'DELETE_TRANSACTION',id:transactions.id})} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
