import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const URL = 'http://localhost:3000/stocks'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>{
      return this.setState({
      stocks: data
    },()=>{console.log(this.state.stocks)})})
  }
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
