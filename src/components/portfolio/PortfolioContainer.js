import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip" },
                {title: "Eventbrite" },
                {title: "Ministry Safe" },
                {title: "SwingAway" }
            ]
        };
    }
    
  PortfolioItems() {
      return this.state.data.map(item => {
          return <PortfolioItem title={title} url={"google.com"}/>;
      })
  }

 handlePageTitleUpdate

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
        
                {this.portfolioItems()}
            </div>
        );
    }
}
