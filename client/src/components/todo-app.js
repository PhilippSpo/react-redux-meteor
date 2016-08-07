import React from 'react'
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

export default TodoApp
