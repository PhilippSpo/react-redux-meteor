import React, { PropTypes } from 'react'
import TodoList from './todo-list'
import Footer from './footer'
import AddTodo from './add-todo'

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

TodoApp.propTypes = {
  params: PropTypes.object.isRequired,
}

export default TodoApp
