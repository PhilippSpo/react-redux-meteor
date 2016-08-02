import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Todo from './todo'
import * as actions from '../action-creators'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers/'
import FetchError from './fetch-error'

class VisibileTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }
  fetchData() {
    const { props: { filter, fetchTodos } } = this
    fetchTodos(filter)
  }
  render() {
    const { props: { isFetching, todos, toggleTodo, errorMessage } } = this
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (<FetchError
        message={errorMessage}
        onRetry={() => this.fetchData()}
      />)
    }
    return <TodoList todos={todos} onToggleTodo={toggleTodo} />
  }
}

VisibileTodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
}

const TodoList = (props) => {
  const { todos, onToggleTodo } = props
  return (
    <ul>
      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(
      state,
      filter
    ),
    filter,
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibileTodoList))
