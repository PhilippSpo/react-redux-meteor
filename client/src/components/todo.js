import React, { PropTypes } from 'react'

const Todo = ({ todo, onToggleTodo }) => {
  const handleToggleTodo = () => {
    onToggleTodo(todo.id)
  }
  return (
    <li
      onClick={handleToggleTodo}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {todo.text}
    </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}

export default Todo
