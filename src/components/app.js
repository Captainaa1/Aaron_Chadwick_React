import React, { Component } from 'react';
import moment from "moment";
import PortfolioContaner from "./portfolio/PortfolioContainer";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Aaron Chadwick React</h1>
        <h2>React Redux Router</h2>
        <PortfolioContaner />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
