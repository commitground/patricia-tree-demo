import React, { Component } from 'react'
import Web3 from 'web3'
import { networks } from '../truffle'
import { drizzleConnect } from 'drizzle-react'

class LocalWeb3Provider extends Component {
  constructor (props) {
    super(props)

    // It only accepts web socket type of web3 provider
    if (this.props.ws) {
      this.web3 = new Web3(new Web3.providers.WebsocketProvider(this.props.ws))
    } else {
      throw 'Should have ws property'
    }
  }

  render () {
    // Assign this object's web3 provider to the currentProvider
    window.web3 = {}
    window.web3.currentProvider = this.web3
    if (this.props.ws && !window.web3.currentProvider.currentProvider.connected) {
      return (
        <div>
          <h2>You should run a private chain on your local environment</h2>
          <ul>
            <li>Check that <code>ganache-cli</code> is running
              on <strong>{this.props.ws}</strong>
            </li>
            <li>Please see the <a href={'/'}>instruction page</a> for details
            </li>
          </ul>
        </div>
      )
    }
    else {
      return this.props.children
    }
  }
}

const mapStateToProps = (state) => ({
  networkId: state.web3.networkId,
})

export default drizzleConnect(LocalWeb3Provider, mapStateToProps)
