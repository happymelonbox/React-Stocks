import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const URL = 'http://localhost:3000/stocks'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>{
      return this.setState({
      stocks: data
    })})
  }

  handleClickBuy = (event) => {
    console.log(event.target.innerHTML)
    const clickedStock = this.state.stocks.find(element => element.name === event.target.innerHTML)
    this.setState({
      portfolio: [...this.state.portfolio, clickedStock]
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio} handleClick={this.handleClickBuy} />
      </div>
    );
  }
}

export default App;
