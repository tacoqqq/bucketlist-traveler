import React, { Component } from 'react';
import DestinationList from '../destination-list/destination-list';
import EmbeddedMap from '../embedded-map/embedded-map';
import './dashboard.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import { AppContext } from '../../app-context';
import Loader from 'react-loader-spinner';


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
          todos: [],
          user: {},
          isLoading: true
        }
      }
    
      static contextType = AppContext;
    
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

    componentDidMount(){
       this.setState({
           isLoading: true
       })
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
                    user: resJson,
                    isLoading: false
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


    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
                <section className="dashboard-container">
                    {this.state.isLoading ?       
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={80}
                            width={80}
                            timeout={3000} //3 secs
                    
                        />
                    : 
                    <>
                        <header className="map-container">
                        <h2>Hello, <span className="red">{this.state.user.nickname ? this.state.user.nickname : this.state.user.email}</span>!</h2>
                            <EmbeddedMap SameSite='None' />
                        </header>
                        <div className="dashboard-bottom">
                            <h2>My Bucket List</h2>
                            <DestinationList />
                            <div className="add-button-container">
                                <button onClick={e => this.handleClick(e)}>Add destination</button>
                            </div>
                        </div>
                    </>
                    }
                </section>
        )
    }
}

export default Dashboard;