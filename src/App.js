import React, { Component } from 'react';
import './App.css';
import SimplePaginate from './components/SimplePaginate';
import ApiPaginate from './components/ApiPaginate';

class App extends Component {
  state = {
    simplePaginate: false,
    apiPaginate: false
  }

  showSimplePaginate = () => {
    this.setState({
      simplePaginate: true,
      apiPaginate: false
    })
  }

  showApiPaginate = () => {
    this.setState({
      simplePaginate: false,
      apiPaginate: true
    })
  }

  render() {
    return (
      <div className="App container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button 
                className="nav-link" 
                onClick={this.showSimplePaginate} 
                href="!#">Simple Pagination</button>
          </li>
          <li className="nav-item">
            <button 
                className="nav-link" 
                onClick={this.showApiPaginate} 
                href="!#">API Pagination</button>
          </li>
        </ul>
        
        {this.state.simplePaginate && <SimplePaginate/>}

        {this.state.apiPaginate && <ApiPaginate/>}
      </div>
    );
  }
}

export default App;
