import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super()
    this.todoItems = [
      { title: 'Learn Go', status: true },
      { title: 'Learn React', status: false },
      { title: 'Learn Express', status: true },
      { title: 'Learn Mongo', status: false },
      { title: 'Learn Node', status: false },
      { title: 'Learn TypeScript', status: true },
      { title: 'Learn Python', status: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          {
            this.todoItems.length > 0 && this.todoItems.map((item, index) => 
              <TodoItem key={ index } item={ item } />
            )
          }
          {
            this.todoItems.length === 0 && 'Nothing'
          }
      </div>
    );
  }
}

export default App;
