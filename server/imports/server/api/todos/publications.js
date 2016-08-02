import { Meteor } from 'meteor/meteor'
import Todos from './todos'

Meteor.publish('Todos.list', (filter = 'all') => {
  const query = {}
  // simulate slow server
  Meteor._sleepForMs(1000)
  // simulate error when publishing
  // throw new Meteor.Error('Something went wrong!')
  if (filter === 'active') {
    query.completed = false
  }
  else if (filter === 'completed') {
    query.completed = true
  }
  return Todos.find(query)
})
