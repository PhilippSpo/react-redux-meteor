import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import asteroid from './configure-asteroid'
import initializeListeners from './action-creators/asteroid'

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(asteroid)]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )

  initializeListeners(store.dispatch, asteroid)

  return store
}

export default configureStore
