import React , { Component } from 'react';
import { AppContext } from '../../app-context';
import './todo.css';
import config from '../../config';
import TokenService from '../../services/token-service';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: this.props.content,
            checkedActive: this.props.checked_active
        }
    }
    
    static contextType = AppContext;

    handleChange = (e) => {
        const newTodo = e.target.value
    
        this.setState({
            content: newTodo
        }, () => {
            let updatedTodo = {
                id: this.props.id,
                destination_id: this.props.destination_id,
                user_id: this.props.user_id,
                content: this.state.content,
                checked_active: this.state.checkedActive
                }

                fetch(`${config.API_ENDPOINT}/todos/${this.props.destination_id}/${this.props.id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${TokenService.getAuthToken()}`
                    },
                    body: JSON.stringify(updatedTodo)
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
                        this.props.updateTodo(updatedTodo)
                    })
                    .catch(err => {
                        console.log(err)
            })
        })
    }

    handleDelete = (e) => {
        let deletedTodo = this.props

        fetch(`${config.API_ENDPOINT}/todos/${this.props.destination_id}/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if (!res.ok){
                    throw new Error(res.error)
                }
                this.props.deleteTodo(deletedTodo)
            })
            .catch(err => {
                console.log(err)
            })


    }

    handleCheck = () => {
        const currentCheckedState = this.state.checkedActive
    
        this.setState({
            checkedActive: !currentCheckedState
        }, () => {
            let updatedTodo = {
                id: this.props.id,
                destination_id: this.props.destination_id,
                user_id: this.props.user_id,
                content: this.state.content,
                checked_active: this.state.checkedActive
                }
                console.log(updatedTodo)
                fetch(`${config.API_ENDPOINT}/todos/${this.props.destination_id}/${this.props.id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${TokenService.getAuthToken()}`
                    },
                    body: JSON.stringify(updatedTodo)
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
                        this.props.updateTodo(updatedTodo)
                    })
                    .catch(err => {
                        console.log(err)
            })
        })
    }

    componentDidMount(){
        window.scrollTo(0,0)        
    }

    render(){
        const checkedStyle = {textDecoration:'line-through', color: '#d3d3d3'}
        return (
            <div className="todo-entry">
                <input className="todo-item" style={this.state.checkedActive ? checkedStyle : null} type="text" value={this.state.content} onChange={e => this.handleChange(e)} />
                <button className="close green" onClick={e => this.handleDelete(e)}></button>
                <button className="check green" onClick={e => this.handleCheck(e)}></button>
            </div>
        )
    }
}

export default Todo;