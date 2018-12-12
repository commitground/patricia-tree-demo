# patricia tree demo app

Patricia Tree Demo Application with ReactJS &amp; Drizzle

[Go to the deployed app on Ropsten network](https://commitground.github.io/patricia-tree-demo)

## What it is?

1. It's a demo dApp for [solidity-patricia-tree](https://github.com/commitground/solidity-patricia-tree) library.
1. You can read & write key-value into a patricia tree which is implemented as a smart contract
1. Merkle tree contract is deployed on the Ropsten network ([0xc5e1320b08ccb821941c5285e4af0adbf244eb69](https://ropsten.etherscan.io/address/0xc5e1320b08ccb821941c5285e4af0adbf244eb69))
1. Hovering on a node will show you information of a node
1. Clicking a node will hide or show its children

## Run it on your local environment

```
git clone https://github.com/commitground/patricia-tree-demo
cd patricia-tree-demo
npm run install
npm run chain # run this script on another shell window
npm run migrate
npm run start
```

In the local environment, it is designed to listen ganache with websocket and use its unlocked account.
Thus, without metamask & ropsten account, you can test this application with your own private net quickly.

## This application uses

1. [Solidity Patricia Tree](https://github.com/commitground/solidity-patricia-tree)
1. [Truffle](https://github.com/trufflesuite/truffle)
1. [Ganache](https://github.com/trufflesuite/ganache)
1. [Drizzle](https://github.com/trufflesuite/drizzle)
1. [Create React App](https://github.com/facebook/create-react-app)
1. [Redux](https://github.com/reduxjs/redux)
1. [Web3JS](https://github.com/ethereum/web3.js)
1. And lots of lovely open sources
