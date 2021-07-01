import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About'

import React, { Component } from 'react';

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Membuat Video Youtube",
        completed: false
      },
      {
        id: uuid(),
        title: "Membuang Sampah",
        completed: false
      },
      {
        id: uuid(),
        title: "Makan Nasi",
        completed: false
      },
    ]
  }

  // Handle Change 
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })});
  } 

  // Delete Button
  delete = (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus kegiatan ini !")) {
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todo delete={this.delete} markCompleted={this.markCompleted} todos={this.state.todos} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>

          </div>
        </div>
      </Router>
    )
  }
}

export default App
