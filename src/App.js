import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LandingPage from './components/landingpage/landingpage';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import EditDestination from './components/edit-destination/edit-destination';
import TokenService from './services/token-service';
import { AppContext } from './app-context';
import PrivateRoute from '../src/components/private-route';
import AddDestination from './components/add-destination/add-destination';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      destinations: [],
      todos: [],
    }
  }

  static contextType = AppContext;

  handleAddDestination = (location) => {
    this.setState({
      destinations: location
    })
  }

  handleAddTodo = (todo) => {
    this.state.todos.push(todo)
    this.setState({
      todos: this.state.todos
    })    
  }

  render(){
    return (
      <AppContext.Provider value = {
        {
          destinations: this.state.destinations,
          todos: this.state.todos,
          user: this.state.users,
          heroImgs: this.context.heroImgs,
          addDestination: this.handleAddDestination,
          addTodo: this.handleAddTodo,
        }
      }>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path='/dashboard' component={Dashboard}/>
              <PrivateRoute path='/add-destination' component={AddDestination}/>
              <PrivateRoute path='/destination/:destinationId' component={EditDestination}/>
              <Redirect to={TokenService.hasAuthToken() ? '/dashboard' : '/'} />
            </Switch>
          </main>
          <Footer />
        </div>  
      </AppContext.Provider>
    )
  }
}


export default App;
