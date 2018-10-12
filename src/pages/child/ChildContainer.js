import Child from './Child'
import { drizzleConnect } from 'drizzle-react'
import { snapshot } from '../../actions/tree'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    networkId: state.web3.networkId,
    MerkluxTree: state.contracts.MerkluxTree,
  }
}

const mapDispatchToProps = (dispatch) => ({
  snapshot: () => dispatch(snapshot())
})

const ChildContainer = drizzleConnect(Child, mapStateToProps, mapDispatchToProps)

export default ChildContainer
