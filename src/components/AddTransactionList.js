import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransactionList = () => {
    const [text,setText] = useState('');
    const [amount,setAmount]=useState(0);
    const {dispatch} = useContext(GlobalContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id:Math.random().toString(32),
            text,
            amount:+amount
        }
        dispatch({type:'ADD_TRANSACTION',transactions:newTransaction})
        setText('');
        setAmount(0);
        console.log(text,amount)
    }
    return (
        <div>
        <h3>添加新交易</h3>
          <form onSubmit={handleSubmit}>
              <div className="form-control">
              <label htmlFor="text">交易名称</label>
              <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="输入名称..." />
              </div>
              <div className="form-control">
              <label htmlFor="amount">金额 <br />（支出-负数，收入-正数）</label>
              <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" placeholder="输入金额..." />
              </div>
              <button className="btn">添加新交易</button>
          </form>
      </div>
    )
}

export default AddTransactionList
