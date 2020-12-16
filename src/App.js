import React from 'react'
import './App.css'
import AddTransactionList from './components/AddTransactionList';
import Balance from './components/Balance';
import Income from './components/Income';
import  TransactionList  from './components/TransactionList';
import Header from './components/Header'
import GlobalProvider from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
        <Header></Header>
        <div className='container'>
          <Balance></Balance>
          <Income></Income>
          <TransactionList></TransactionList>
          <AddTransactionList></AddTransactionList>
        </div>
    </GlobalProvider>
  );
}

export default App;
