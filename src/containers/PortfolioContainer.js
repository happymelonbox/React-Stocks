import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handleClick = () => {
  }
  render() {
    return (
      <React.Fragment>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock=>{
              return (
                <div key={stock.id} >
                  < Stock stock={stock} onClick={this.handleClick} />
                </div>
              )
            })
          }
      </React.Fragment>
    );
  }

}

export default PortfolioContainer;
