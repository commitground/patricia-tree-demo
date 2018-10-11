import MerkluxTree from './../build/contracts/MerkluxTree.json'
import MerkluxCase from './../build/contracts/MerkluxCase.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    MerkluxTree,
    MerkluxCase
  ],
  events: {
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
