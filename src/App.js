import React, { Component } from 'react'
import { Route } from 'react-router'
import InstructionContainer from './pages/instruction/InstructionContainer'
import LocalContainer from './pages/local/LocalContainer'
import RopstenContainer from './pages/ropsten/RopstenContainer'

class App extends Component {
  render () {
    return (
      <div className={'App'}>
        <Route exact path="/" component={InstructionContainer}/>
        <Route exact path="/local" component={LocalContainer}/>
        <Route exact path="/ropsten" component={RopstenContainer}/>
      </div>
    )
  }
}

export default App
