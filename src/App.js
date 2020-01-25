import React from 'react';
import './App.css';
import PriceForm from './components/Form'
import Header from './components/Header'

const App = () => {
  return(
    <div id="app">
      <Header />
      <div id="formdiv">
        <PriceForm />
      </div>
      
    </div>
  )
}

export default App;
