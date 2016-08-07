import { Meteor } from 'meteor/meteor'
import Todos from './todos'

Meteor.methods({
  addTodo(_id, text) {
    // simulate slow server
    Meteor._sleepForMs(1000)

    // simulate add todo error
    // throw Error('NOT ALLOWED!!!')
    const todoId = Todos.insert({ _id, text })
    return Todos.findOne(todoId)
  },
  toggleTodo(_id) {
    // simulate slow server
    Meteor._sleepForMs(1000)

    // simulate toggle todo error
    // throw Error('NOT ALLOWED!!!')
    const todo = Todos.findOne(_id)
    Todos.update(_id, { $set: { completed: !todo.completed } })
  }
})
