import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
import axios from "axios";
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };            

        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }
        handleFilter(filter) {
            this.setState({
                data: this.state.data.filter(item => {
                
                return item.category === filter;
                })
            })
        }
    
        getPortfolioItems() {
            axios
                .get("https://captainaa1.devcamp.space/portfolio/portfolio_items")
                .then ( response => {
                    console.log("response data", response);
                    this.setState({
                        data: response.data.portfolio_items
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            }





    
  PortfolioItems() {
      // Data that we'll need:
      // - background
      // - logo
      // - description: desrcription
      // - id: id
      return this.state.data.map(item => {
        console.log("portfolio item");
          return 
          <PortfolioItem 
          key= {item.id} 
          title={item.name}
          item={item}
          url={item.url} 
          slug={item.slug}/>;
      })
  }

 handlePageTitleUpdate() {
     this.setState({
         pageTitle: "Congrats"
     })
 }
    componentDidMount () {
        this.getPortfolioItems();
    }
    render() {
        if (this.state.isLoading) {
            return <div>Loading... Just wait a sec</div>
        }

        return (
            
            <div>

                
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                {this.PortfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}
