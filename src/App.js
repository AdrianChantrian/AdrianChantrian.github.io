import './App.css';
import CurrencyNavi from './CurrencyNavi';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import axios from 'axios';
import store from './redux/store';
import { addCurrency } from './redux/currency_action';

export default class App extends Component {
  state = {isCurrencyGet: false}
  componentDidMount(){
    if(!this.state.isCurrencyGet){
      let btc = axios.get(`https://api.cryptapi.io/btc/info/`)
      let eth = axios.get(`https://api.cryptapi.io/eth/info/`)
      let ltc = axios.get(`https://api.cryptapi.io/ltc/info/`)
      let trx = axios.get(`https://api.cryptapi.io/trx/info/`)
      Promise.all([btc,eth,ltc,trx]).then(
        response=>{
          for(const res of response){
            console.log(res.data)
            store.dispatch(addCurrency(res.data))
          }
          this.setState({isCurrencyGet:true})
        },
        error => alert("failt to get currency info",error)
      )
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Your Fuse Inc React Dev Test</h1>
          <CurrencyNavi/>
        </div>
      </BrowserRouter>
    );
  }
}

