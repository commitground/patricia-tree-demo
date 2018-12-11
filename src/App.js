import React, { Component } from 'react'
import { Route } from 'react-router'
import InstructionContainer from './pages/instruction/InstructionContainer'
import DemoContainer from './pages/demo/DemoContainer'

class App extends Component {
  render () {
    return (
      <div className={'App'}>
        <Route exact path="/" component={InstructionContainer}/>
        <Route exact path="/demo" component={DemoContainer}/>
      </div>
    )
  }
}

export default App
