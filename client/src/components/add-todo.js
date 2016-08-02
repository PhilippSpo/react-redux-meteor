import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action-creators'

const AddTodo = ({ dispatch }) => {
  const handleAddTodo = () => {
    dispatch(addTodo(this.input.value))
    this.input.value = ''
  }
  return (
    <div>
      <input
        type="text"
        ref={node => {
          this.input = node
        }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddTodo)
