import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import asteroid from './configure-asteroid'

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(asteroid)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )

  asteroid.ddp.on('added', ({ collection, fields, id }) => {
    if (collection === 'todos') {
      store.dispatch({
        type: 'DDP_ADDED',
        response: { collection, doc: { id, ...fields } },
      })
    }
  })

  asteroid.ddp.on('changed', ({ collection, fields, id }) => {
    if (collection === 'todos') {
      store.dispatch({
        type: 'DDP_CHANGED',
        response: { collection, doc: { id, ...fields } },
      })
    }
  })

  asteroid.ddp.on('removed', ({ collection, id }) => {
    if (collection === 'todos') {
      store.dispatch({
        type: 'DDP_REMOVED',
        response: { collection, id },
      })
    }
  })

  return store
}

export default configureStore
