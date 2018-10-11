import { drizzleConnect } from 'drizzle-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContractDeployer extends Component {
  constructor (props, context) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.drizzle = context.drizzle
    this.web3 = context.web3
    console.log(context)
    console.log(context)
    console.log(this.web3)
    console.log(this.web3)
    console.log(this.web3)
    console.log(this.web3)
    console.log(this.web3)
    console.log(this.web3)

    this.contractConfig = {
      contractName: props.contract,
      web3Contract: new context.drizzle.web3.eth.Contract(props.interface.abi)
    }

    this.inputs = []
    let initialState = {}

    // Iterate over abi for correct function.
    for (var i = 0; i < props.interface.abi.length; i++) {
      if (props.interface.abi[i].type === 'constructor') {
        this.inputs = props.interface.abi[i].inputs

        for (var i = 0; i < this.inputs.length; i++) {
          initialState[this.inputs[i].name] = ''
        }
        break
      }
    }

    this.state = initialState
  }

  handleSubmit () {
    this.drizzle.addContract(this.contractConfig, ...Object.values(this.state))
  }

  handleInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  translateType (type) {
    switch (true) {
      case /^uint/.test(type):
        return 'number'
        break
      case /^string/.test(type) || /^bytes/.test(type):
        return 'text'
        break
      case /^bool/.test(type):
        return 'checkbox'
        break
      default:
        return 'text'
    }
  }

  render () {
    return (
      <form className="pure-form pure-form-stacked">
        {this.inputs.map((input, index) => {
          let inputType = this.translateType(input.type)
          let inputLabel = this.props.labels ? this.props.labels[index] : input.name
          // check if input type is struct and if so loop out struct fields as well
          return (<input key={input.name} type={inputType} name={input.name} value={this.state[input.name]}
                         placeholder={inputLabel} onChange={this.handleInputChange}/>)
        })}
        <button key="submit" className="pure-button" type="button" onClick={this.handleSubmit}>Deploy</button>
      </form>
    )
  }
}

ContractDeployer.contextTypes = {
  drizzle: PropTypes.object
}

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    account: state.accounts[0],
    web3: state.web3
  }
}

export default drizzleConnect(ContractDeployer, mapStateToProps)