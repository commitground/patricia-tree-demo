import React, { Component } from 'react'
import { Route } from 'react-router'
import InstructionContainer from './pages/instruction/InstructionContainer'
import RootContainer from './pages/root/RootContainer'
import ChildContainer from './pages/child/ChildContainer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scriptLoaded: false, // flag for hyperspace theme animation script
    };
  }

  componentDidMount () {
    // It uses hyperspace theme from HTML5UP.net/hyperspace
    // To apply animation effects using jquery, we re load main.js
    // when the components are mounted successfully.
    if(!this.state.scriptLoaded) {
      this.setState({scriptLoaded: true});
      const script = document.createElement('script');
      script.src = '/assets/js/main.js';
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={InstructionContainer}/>
        <Route exact path="/root" component={RootContainer}/>
        <Route exact path="/child" component={ChildContainer}/>
      </div>
    );
  }
}

export default App
