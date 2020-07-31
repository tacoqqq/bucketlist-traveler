import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="middle">
        </div>
        <Footer />
      </div>     
    )
  }
}


export default App;
