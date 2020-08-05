import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LandingPage from './components/landingpage/landingpage';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import EditDestination from './components/edit-destination/edit-destination';
import { AppContext } from './app-context';
import { destinationData, todoData, userData } from './dummydata';
import AddDestination from './components/add-destination/add-destination';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      destinations: destinationData,
      todos: todoData,
      users: userData,
      currentLoggedIn: false
    }
  }

  static contextType = AppContext;


  handleAddDestination = (location) => {
    this.state.destinations.push(location)
    this.setState({
      destinations: this.state.destinations
    })
  }


  handleAddTodo = (todo,id) => {
    this.state.todos.push({
      todoId: this.state.todos.length + 1,
      userId: 1,
      userDestinationRelationId: Number(id),
      content: todo      
    })
    this.setState({
      todos: this.state.todos
    })    
  }

  handleUpdateTodo = (todoObj) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (Number(todo.todoId) === Number(todoObj.todoId)) {
        return todoObj
      } 
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  handleDeleteTodo = (todoObj) => {
    const filteredTodos = this.state.todos.filter(todo => Number(todo.todoId) !== Number(todoObj.todoId))
    this.setState({
      todos: filteredTodos
    })
  }

  handleUpdateCurrentUser = (userId) => {
    console.log('here')
    let userMatchingDestinations = destinationData.filter(destination => Number(destination.userId) == Number(userId))
    console.log(userMatchingDestinations)
      this.setState({
        destinations: userMatchingDestinations,
        currentLoggedIn: !this.state.currentLoggedIn
      })
  }

  render(){
    return (
      <AppContext.Provider value = {
        {
          destinations: this.state.destinations,
          todos: this.state.todos,
          users: this.state.users,
          addDestination: this.handleAddDestination,
          addTodo: this.handleAddTodo,
          updateTodo: this.handleUpdateTodo,
          deleteTodo: this.handleDeleteTodo,
          updateCurrentUser: this.handleUpdateCurrentUser
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
              <Route path="/destination/:destinationId" component={EditDestination}/>
            </Switch>
          </main>
          <Footer />
        </div>  
      </AppContext.Provider>   
    )
  }
}


export default App;
