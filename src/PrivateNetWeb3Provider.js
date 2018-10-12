import React, { Component } from 'react'
import Web3 from 'web3'
import { networks } from '../truffle'
import { drizzleConnect } from 'drizzle-react'

class PrivateNetWeb3Provider extends Component {
  constructor (props) {
    super(props)

    // It only accepts web socket type of web3 provider
    if (this.props.ws) {
      this.web3 = new Web3(new Web3.providers.WebsocketProvider(this.props.ws))
    } else {
      throw 'PrivateNetWeb3Provider should have "ws" property'
    }
  }

  render () {
    // Assign this object's web3 provider to the currentProvider
    window.web3 = {}
    window.web3.currentProvider = this.web3

    if (this.props.id && this.props.id !== this.props.networkId) {
      // If the network id is specified, check the current web3 version indicates the same network correctly
      return (
        <div>
          <h2>For this page, you should change your metamask network to the "child network"</h2>
          <ul>
            <li>Check that you are running <code>ganache-cli</code> with network
              id <strong>{this.props.id}</strong> and port
              number <strong>{networks.child.port}</strong></li>
            <li>Check your metamask network is using <strong>http://localhost:{networks.child.port}</strong></li>
            <li>Please see <a href={'/'}>instruction</a></li>
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

export default drizzleConnect(PrivateNetWeb3Provider, mapStateToProps)
