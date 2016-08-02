import omit from 'lodash/omit'

const byId = (state = {}, action) => {
  if (action.type === 'DDP_CHANGED') {
    return {
      ...state,
      [action.response.doc.id]: {
        // merge the old doc with the changed fields
        ...state[action.response.doc.id],
        ...action.response.doc,
      },
    }
  }
  if (action.type === 'DDP_ADDED') {
    return {
      ...state,
      [action.response.doc.id]: action.response.doc,
    }
  }
  if (action.type === 'DDP_REMOVED') {
    return omit(state, action.response.id)
  }
  return state
}

export default byId

export const getTodo = (state, id) => state[id]
