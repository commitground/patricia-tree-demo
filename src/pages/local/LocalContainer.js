import Local from './Local'
import { drizzleConnect } from 'drizzle-react'
import { snapshot } from '../../actions/tree'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    networkId: state.web3.networkId,
    MerkleTree: state.contracts.MerkleTree,
  }
}

const mapDispatchToProps = (dispatch) => ({
})

const LocalContainer = drizzleConnect(Local, mapStateToProps, mapDispatchToProps)

export default LocalContainer
