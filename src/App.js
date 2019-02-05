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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.todoItems.map((item, index) => 
              <TodoItem key={ index } item={ item } />
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
