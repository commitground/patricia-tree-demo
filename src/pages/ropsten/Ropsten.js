import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'
import MerklePatriciaTree from '../../components/MerklePatriciaTree'
import styled from 'styled-components'
import {
  ContractForm,
  ContractData,
  LoadingContainer,
} from 'drizzle-react-components'
import DemoWeb3Provider from '../../LocalWeb3Provider'

const FormStyler = styled.div`
input {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
`
const Ropsten = ({ networkId }) => {
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  console.log(networkId)
  if (networkId != 3) {
    return (
      <FullscreenLayout styleCode={2}>
        <label>You are not on the ropsten network</label>
      </FullscreenLayout>
    )
  }
  return (
    <FullscreenLayout styleCode={2}>
      <LoadingContainer loadingComp={
        (
          <div>
            <label>Contracts are not migrated into the network</label>
            <pre><code>
                git clone https://github.com/commitground/solidity-patricia-tree<br/>
                cd solidity-patricia-tree<br/>
                npm install<br/>
                truffle migrate --network ropsten
              </code></pre>
          </div>
        )
      }>
        <div>
          <div style={{ float: 'left', width: '70%', height: '90vh' }}>
            <MerklePatriciaTree/>
          </div>
          <div style={{
            float: 'right',
            width: '30%',
            height: '90vh',
            wordBreak: 'break-all',
          }}>
            <h2>Current Root Hash</h2>
            <ContractData contract={'MerkleTree'} method={'getRootHash'}/>
            <hr/>
            <h2>Insert items</h2>
            <FormStyler>
              <ContractForm contract="MerkleTree" method="insertString"
                            sendArgs={{ gas: 1000000 }}/>
            </FormStyler>
          </div>
        </div>
      </LoadingContainer>
    </FullscreenLayout>
  )
}

export default Ropsten
