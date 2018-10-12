import { fromJS } from 'immutable'

const tree = (state = { data: {}, snapshots: [] }, action) => {
  let newState = fromJS(state)
  switch (action.type) {
    case 'UPDATE_TREE':
      return newState.setIn(['data'], action.tree).toJS()
    case 'SNAPSHOT':
      let doesExist = newState.get('snapshots').reduce((acc, val) => {
        if (acc) {
          return acc
        } else {
          console.log(newState.get('data').get('name'))
          if (val.get('name') === newState.get('data').get('name')) {
            return true
          } else {
            return false
          }
        }
      }, false)
      if (doesExist) {
        return newState.toJS()
      } else {
        return newState.updateIn(['snapshots'], list => list.push(newState.get('data'))).toJS()
      }
    default:
      return newState.toJS()
  }
}
export default tree