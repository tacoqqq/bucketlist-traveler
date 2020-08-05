import React , { Component } from 'react';
import { AppContext } from '../../app-context';
import './todo.css';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: this.props.content,
            checkedActive: false
        }
    }
    
    static contextType = AppContext;

    handleChange = (e) => {
        const newTodo = e.target.value
        this.setState({
            content: newTodo
        }, () => {
            let updatedTodo = {
                ...this.props,
                content: this.state.content
                }
            this.context.updateTodo(updatedTodo)
        })
    }

    handleDelete = (e) => {
        let deletedTodo = this.props
        this.context.deleteTodo(deletedTodo)
    }

    handleCheck = (e) => {
        const currentCheckedState = this.state.checkedActive
        this.setState({
            checkedActive: !currentCheckedState
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