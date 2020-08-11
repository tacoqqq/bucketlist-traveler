import React, { Component } from 'react';
import Todo from '../todo/todo';
import './edit-destination.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';

class EditDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo: ''
        }
    }

    static contextType = AppContext;

    handleChange = (e) => {
        const todoItem = e.target.value
        this.setState({
            todo: todoItem
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let submitItem = this.state.todo
        this.context.addTodo(submitItem , this.props.match.params.destinationId)
        this.setState({
            todo: ''
        })
    }

    handleDelete = (e) => {
        e.preventDefault()
        const destination = this.context.destinations[this.props.match.params.destinationId - 1]
        const deleteItemId = destination.destinationId
        this.context.deleteDestination(deleteItemId)
        this.props.history.push('/dashboard')
    }

    componentDidMount(){
        window.scrollTo(0,0)        
    }

    componentDidUpdate() {
        this.newData.scrollIntoView({ behavior: "smooth" })
    }

    render(){
        const destination = this.context.destinations[this.props.match.params.destinationId - 1]
        const todos = this.context.todos.filter(todo => todo.userDestinationRelationId === Number(this.props.match.params.destinationId)).map((todo,todoId) => <Todo key={todo.todoId} {...todo}/>)
        return(
        <section className="destination-todo-container">
            <header>
                <div className="destination-cover-photo-container">
                    <img className="destination-cover-photo" src={destination.img} alt='destination img'/> 
                </div>
                <div className="add-todo-bar-wrapper">
                    <h1 className="todo-title">Things to Do in {destination.destination}</h1>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input className="add-tobo-bar" type="text" placeholder="Add todo here" value={this.state.todo} onChange={e => this.handleChange(e)}></input>
                        <button className="add-todo-btn" type="submit">Add</button>
                    </form>
                    <button className="remove-message" onClick={e => this.handleDelete(e)}>Remove {destination.destination} from my bucket list</button>
                </div>
            </header>
            <div className="todo-list" ref={(ref) => this.newData = ref}>
                {todos}
            </div>
            <div className="action-button">
                <Link to="/dashboard"><button>Back to Dashboard</button></Link>
            </div>
        </section>
        )
    }
}

export default EditDestination;