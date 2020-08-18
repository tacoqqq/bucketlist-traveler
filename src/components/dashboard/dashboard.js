import React, { Component } from 'react';
import DestinationList from '../destination-list/destination-list';
import EmbeddedMap from '../embedded-map/embedded-map';
import './dashboard.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import { AppContext } from '../../app-context';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
          todos: [],
          user: {},
        }
      }
    
      static contextType = AppContext;

      /*
      handleAddDestination = (location) => {
        this.state.destinations.push(location)
        this.setState({
          destinations: this.state.destinations
        })
      }
      */
    
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

    /*      
      handleUpdateCurrentUser = (userId) => {
        let user = userData.find(user => Number(user.userId) === Number(userId))
        console.log(user)
        let userMatchingDestinations = destinationData.filter(destination => Number(destination.userId) === Number(userId))
        let userMatchingTodos = todoData.filter(todo => Number(todo.userId) === Number(userId))
          this.setState({
            destinations: userMatchingDestinations,
            todos: userMatchingTodos,
            currentUser: user,
            currentLoggedIn: true
          })
      }
    

      handleAddUser = (newUser) => {
        this.state.users.push(newUser)
        this.setState({
          users: this.state.users
        })
      }
      */
    
      handleDeleteDestination = (destinationId) => {
        const filteredDestinations = this.state.destinations.filter(destination => Number(destination.destinationId) !== Number(destinationId))
        this.setState({
          destinations: filteredDestinations
        })    
      }


    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/add-destination')
    }

    static contextType = AppContext;

    componentDidMount(){
       fetch(`${config.API_ENDPOINT}/destinations`, {
           headers: {
               'authorization': `bearer ${TokenService.getAuthToken()}`
           }
       })
       .then(res => {
           if (!res.ok){
               throw new Error(res.error)
           }
           return res.json()
       })
       .then(resJson => {
           this.context.addDestination(resJson)
           fetch(`${config.API_ENDPOINT}/users`, {
                headers: {
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                }
            })
            .then(res => {
                if (!res.ok){
                    throw new Error(res.error)
                }
                return res.json()
            })
            .then(resJson => {
                this.setState({
                    user: resJson
                })
            })
            .catch(err => {
                console.log(err)
            })
       })
       .catch(err => {
           console.log(err)
       })
    }


    render(){
        return(
                <section className="dashboard-container">
                    <header className="map-container">
                    <h2>Hello, <span className="red">{this.state.user.nickname ? this.state.user.nickname : this.state.user.email}</span>!</h2>
                        <EmbeddedMap/>
                    </header>
                    <div className="dashboard-bottom">
                        <h2>My Bucket List</h2>
                        <DestinationList />
                        <div className="add-button-container">
                            <button onClick={e => this.handleClick(e)}>Add destination</button>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Dashboard;