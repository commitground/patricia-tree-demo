import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { DrizzleProvider } from 'drizzle-react'

// Layouts
import App from './App'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

/* local state variables */
ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
        <Router history={history} store={store}>
          <Route path="/" component={App}/>
        </Router>
    </DrizzleProvider>
  ),
  document.getElementById('root')
)
