import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar handleFilter={this.props.handleFilter} handleSort={this.props.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} handleClick={this.props.handleClickFilter}  />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} handleClick={this.props.handleClickSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
