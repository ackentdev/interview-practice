import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      movies: data
    }
  }
  render(){
    return (
      <div></div>
    )
  }
}

export default App;
