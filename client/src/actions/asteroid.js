export default (dispatch, asteroid) => {
  asteroid.ddp.on('added', ({ collection, fields, id }) => {
    dispatch({
      type: 'DDP_ADDED',
      response: { collection, doc: { id, ...fields } },
    })
  })

  asteroid.ddp.on('changed', ({ collection, fields, id }) => {
    dispatch({
      type: 'DDP_CHANGED',
      response: { collection, doc: { id, ...fields } },
    })
  })

  asteroid.ddp.on('removed', ({ collection, id }) => {
    dispatch({
      type: 'DDP_REMOVED',
      response: { collection, id },
    })
  })
}
