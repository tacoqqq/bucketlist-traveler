import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LandingPage from './components/landingpage/landingpage';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import { AppContext } from './app-context';
import { destinationData } from './dummydata';
import AddDestination from './components/add-destination/add-destination';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      destinations: destinationData
    }
  }

  static contextType = AppContext;


  handleAddDestination = (location) => {
    this.state.destinations.push(location)
    this.setState({
      destinations: this.state.destinations
    })
  }

  render(){
    return (
      <AppContext.Provider value = {
        {
          destinations: this.state.destinations,
          addDestination: this.handleAddDestination
        }
      }>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/add-destination" component={AddDestination}/>
            </Switch>
          </main>
          <Footer />
        </div>  
      </AppContext.Provider>   
    )
  }
}


export default App;
