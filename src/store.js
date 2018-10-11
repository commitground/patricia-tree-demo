import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'
import mainReducer from './reducers';
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import { generateContractsInitialState } from 'drizzle'
import drizzleOptions from './drizzleOptions'

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()

const loggerMiddleware = createLogger();
const routingMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions),
}

const store = createStore(
  mainReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      routingMiddleware,
      loggerMiddleware,
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)

export { history }
export { store }

export default store
