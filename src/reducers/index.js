import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { drizzleReducers } from 'drizzle'
import tree from './tree';

const mainReducer = combineReducers({
  routing: routerReducer,
  tree,
  ...drizzleReducers
})

export default mainReducer
