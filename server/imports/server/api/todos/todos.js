import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Todos = new Mongo.Collection('todos')

Todos.schema = new SimpleSchema({
  _id: {
    type: String,
  },
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
    defaultValue: false,
  },
})

Todos.attachSchema(Todos.schema)

export default Todos
