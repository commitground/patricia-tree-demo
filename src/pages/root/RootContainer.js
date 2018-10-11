import Root from './Root'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3.networkId
  }
};

const RootContainer = drizzleConnect(Root, mapStateToProps);

export default RootContainer;
