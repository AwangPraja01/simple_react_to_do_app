import TodoItem from './TodoItem';

import React, { Component } from 'react'

export class Todo extends Component {
    render() {
        return this.props.todos.map(todo => 
            <TodoItem key={todo.id} delete={this.props.delete} markCompleted={this.props.markCompleted} todo={todo}/>
        );
    }
}

export default Todo
