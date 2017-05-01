import React, { Component } from 'react';
import '../css/App.css';

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state = ({
      name:'Rafael'
    });
  }


  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.name}
        </p>
        <button>Change Name</button>
      </div>
    );
  }
}

export default SearchForm;
