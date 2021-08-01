import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const URL = 'http://localhost:3000/stocks'

class App extends Component {
  constructor(){
    super()
    this.state = {
      dataArray: [],
      stocks: [],
      portfolio: [],
      filter: "All",
      sort: 'name'
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
        stocks: data,
        dataArray: data
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

  handleFilter = (value) => {
    this.setState({
      filter: value
    },()=>{console.log(this.state.filter)})
  }

  handleSort = () => {
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.filter !== this.state.filter){
    const filteredStocks = this.state.dataArray.filter(stock => {return stock.type === this.state.filter})
      return this.setState({
      stocks: this.state.filter !== 'All' ? filteredStocks : this.state.dataArray
    })}
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio} handleClickBuy={this.handleClickBuy} handleClickSell={this.handleClickSell} handleFilter={this.handleFilter} handleSort={this.handleSort} />
      </div>
    );
  }
}

export default App;
