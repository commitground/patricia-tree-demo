import React, { Component } from 'react'
import { Route } from 'react-router'
import InstructionContainer from './pages/instruction/InstructionContainer'
import LocalContainer from './pages/local/LocalContainer'
import RopstenContainer from './pages/ropsten/RopstenContainer'

class App extends Component {
  render () {
    return (
      <div className={'App'}>
        <Route exact path={process.env.PUBLIC_URL + '/'}
               component={process.env.NODE_ENV === 'production'
                 ? RopstenContainer
                 : LocalContainer}/>
        <Route exact path={process.env.PUBLIC_URL + '/manual'}
               component={InstructionContainer}/>
      </div>
    )
  }
}

export default App
