import React, { Component } from 'react';
import Todo from '../todo/todo';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import config from '../../config';
import TokenService from '../../services/token-service';
import actions from '../../actions/actions';
import './edit-destination.css';


class EditDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
            todoContent: '',
            todoList: [],
            isLoading: true,
        }
    }

    static contextType = AppContext;

    handleChange = (e) => {
        const todoItem = e.target.value
        this.setState({
            todoContent: todoItem
        })
    }

    handleDeleteDestination = (e) => {
        e.preventDefault()
        fetch(`${config.API_ENDPOINT}/destinations/${this.props.match.params.destinationId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok){
                    throw new Error(res.error)
                }
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleAddTodo = (e) => {
        e.preventDefault()

        let submitItem = {
            destination_id: Number(this.props.match.params.destinationId),
            content: this.state.todoContent
        }

        fetch(`${config.API_ENDPOINT}/todos`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(submitItem)
        })
            .then(res => {
                if (!res.ok){
                    throw new Error(res.error)
                }
                return res.json()
            })
            .then(resJson => {
                this.state.todoList.push(resJson)
                this.setState({
                    todoContent:'',
                    todoList: this.state.todoList
                })
                this.newData.scrollIntoView({ behavior: "smooth" })
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    handleDeleteTodo = (todoObj) => {
        const filteredTodos = this.state.todoList.filter(todo => Number(todo.id) !== Number(todoObj.id))
        this.setState({
            todoList: filteredTodos
        })
    }


    handleUpdateTodo = (todoObj) => {
        const updatedTodos = this.state.todoList.map(todo => {
            if (Number(todo.id) === Number(todoObj.id)) {
            return todoObj
            } 
            return todo
        })

        this.setState({
            todoList: updatedTodos
        })
    }

    handleLoad = () => {
        console.log('insideHandleLoad')
        this.setState({
            isLoading: true
        })

    }

    componentDidMount(){
        document.addEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);

        window.addEventListener('load', this.handleLoad)
        window.scrollTo(0,0)
        if (this.context.destinations.length === 0){
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

        fetch(`${config.API_ENDPOINT}/todos/${this.props.match.params.destinationId}`, {
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
                    todoList: resJson
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => actions.escFunction(e, this.props.history), false);
    }

    render(){
        const destination = this.context.destinations.find(destination => Number(destination.id) === Number(this.props.match.params.destinationId)) || ''
        const todoList = this.state.todoList.map((todo,id) => <Todo 
            deleteTodo={this.handleDeleteTodo} 
            updateTodo={this.handleUpdateTodo} 
            key={todo.id} 
            {...todo}/>
            ) 
            || ''
        return(
            <section className="destination-todo-container">
                <header>
                    <div className="destination-cover-photo-container">
                        <img className="destination-cover-photo" src={destination.img} alt='destination img'/> 
                    </div>
                    <div className="add-todo-bar-wrapper">
                        <h1 className="todo-title">Things to Do in {destination.destination}</h1>
                        <form onSubmit={e => this.handleAddTodo(e)}>
                            <input className="add-tobo-bar" type="text" placeholder="Add todo here" required value={this.state.todoContent} onChange={e => this.handleChange(e)}></input>
                            <button className="add-todo-btn" type="submit">Add</button>
                        </form>
                        <button className="remove-message" onClick={e => this.handleDeleteDestination(e)}>Remove {destination.destination} from my bucket list</button>
                    </div>
                </header>
                <div className="todo-list" ref={(ref) => this.newData = ref}>
                    {todoList.length > 0 ? todoList: <div className="message">What do you want to do in <span>{destination.destination}</span>?</div>}
                </div>
                <div className="action-button">
                    <Link to="/dashboard"><button>Back to Dashboard</button></Link>
                </div>
            </section>

        )
    }
}

export default EditDestination;