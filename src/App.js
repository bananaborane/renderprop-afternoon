import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        hello friend
        <h3>Render Props</h3>
        <CurrencyConverter render={(currencyData, amount)=>{
          return ( 
						<p>
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p> 
          )
        }} />
      </div>
    );
  }
}

export default App;
