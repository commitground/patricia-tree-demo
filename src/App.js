import React, { Component } from 'react'
import { Route } from 'react-router'
import InstructionContainer from './pages/instruction/InstructionContainer'
import RootContainer from './pages/root/RootContainer'
import ChildContainer from './pages/child/ChildContainer'

class App extends Component {
  render () {
    return (
      <div className={'App'}>
        <Route exact path="/" component={InstructionContainer}/>
        <Route exact path="/root" component={RootContainer}/>
        <Route exact path="/child" component={ChildContainer}/>
      </div>
    )
  }
}

export default App
