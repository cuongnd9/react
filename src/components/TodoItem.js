import React, { Component } from 'react'
import classNames from 'classnames'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const { item } = this.props
    const className = classNames(
      'TodoItem',
      {
        'TodoItem-complete': item.status
      }
    )
    return (
      <div  className={className}>
        <p>{this.props.item.title}</p>
      </div>
    )
  }
}

export default TodoItem