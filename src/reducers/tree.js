const tree = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_TREE':
      return action.tree
    default:
      return state
  }
}
export default tree