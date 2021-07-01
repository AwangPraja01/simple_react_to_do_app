import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            flex: '6',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={itemStyle}>
                <p style={{display: 'flex'}}>
                    <input style={{flex: '1'}} type='checkbox' onChange={this.props.markCompleted.bind(this, id)}/> {' '}
                    <span style={this.getStyle()}>{title}</span>
                    <button style={buttonStyle} onClick={this.props.delete.bind(this, id)}>Hapus</button>
                </p>
            </div>
        )
    }
}

const itemStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: "1px #ccc dotted",
}

const buttonStyle = {
    height: '20px',
    flex: '1'
}

export default TodoItem
