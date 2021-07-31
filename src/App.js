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
    const clickedStock = this.state.stocks.map(stock => stock.name === event.target.innerHTML ? this.setState({
      portfolio: [...this.state.portfolio, stock]
    }) : null )
    return clickedStock
  }

  handleClickSell = (event) => {
    const findStock = this.state.portfolio.find(stock=>{return stock.name === event.target.innerHTML})
    const newPortfolio = this.state.portfolio.filter(item=>{return item !== findStock})
    // const indexOfClicked = this.state.portfolio.indexOf(findStock)
    // const newPortfolio = this.state.portfolio.splice(indexOfClicked, 1)
    return this.setState({
      portfolio: newPortfolio
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio} handleClickBuy={this.handleClickBuy} handleClickSell={this.handleClickSell} />
      </div>
    );
  }
}

export default App;
