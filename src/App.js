import React from 'react'
import './App.css';
import Counter from './components/Counter'
import Quotes from './components/Quotes'
import AppComponent from './components/Context/App-Component'
import CounterReducer from './components/Reducer/CounterReducer'
import ParentCompoent from './UseCallBack/Parent'


function App() {
  return (
    <div className="App">
     
        {/* <Counter/> */}
      <Quotes/>
      <AppComponent/>
      <CounterReducer/>
      <ParentCompoent/>
     
    </div>
  );
}

export default App;
