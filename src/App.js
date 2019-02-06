import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [
        { title: 'Learn Go', isComplete: true },
        { title: 'Learn React', isComplete: false },
        { title: 'Learn Express', isComplete: true },
        { title: 'Learn Mongo', isComplete: false },
        { title: 'Learn Node', isComplete: false },
        { title: 'Learn TypeScript', isComplete: true },
        { title: 'Learn Python', status: false }
      ]
    }
  }

  onItemClicked = (value) => {
    const { todoItems } = this.state
    const index = todoItems.indexOf(value)
    
    this.setState({ todoItems: [
      ...todoItems.slice(0, index),
      {
        ...value,
        isComplete: !value.isComplete
      },
      ...todoItems.slice(index + 1)
    ]})
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          {
            this.state.todoItems.length > 0 
            && this.state.todoItems.map((item, index) =>
              <TodoItem 
                key={ index } 
                item={ item } 
                onClick={this.onItemClicked} 
              />
            )
          }
          {
            this.state.todoItems.length === 0 && 'Nothing'
          }
      </div>
    );
  }
}

export default App;
