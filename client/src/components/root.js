import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from './todo-app'
import configureStore from '../configure-store'

const Root = () => (
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={TodoApp} />
    </Router>
  </Provider>
)

export default Root
