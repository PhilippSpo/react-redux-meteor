import random from 'meteor-random'
import { getIsFetching, getTodo } from '../reducers'

export const fetchTodos = (filter) => (dispatch, getState, asteroid) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  })

  return new Promise((resolve, reject) => {
    asteroid.subscribe('Todos.list', filter)
    .on('ready', () => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
      })
    })
    .on('error', error => {
      reject(error)
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong',
      })
    })
  })
}

export const addTodo = (text) => (dispatch, getState, asteroid) => {
  // for optimistic UI we immediately dispatch an DDP_ADDED action
  const id = random.id()
  dispatch({
    type: 'DDP_ADDED',
    response: { collection: 'todos', doc: { id, text, completed: false } },
  })
  asteroid.call('addTodo', id, text).then(() => {
    // if this succeeds the todo has already been added
    // so there is nothing more todo
  })
  .catch(() => {
    // something went wrong when creating the new todo
    // since we optimistically added the todo already we need to remove it now
    dispatch({
      type: 'DDP_REMOVED',
      response: { collection: 'todos', id },
    })
  })
}

export const toggleTodo = (id) => (dispatch, getState, asteroid) => {
  const doc = getTodo(getState(), id)
  dispatch({
    type: 'DDP_CHANGED',
    response: { collection: 'todos', doc: { ...doc, completed: !doc.completed } },
  })
  asteroid.call('toggleTodo', id)
  .catch(() => {
    // something went wrong when creating the new todo
    // since we optimistically added the todo already we need to remove it now
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection: 'todos', doc },
    })
  })
}
