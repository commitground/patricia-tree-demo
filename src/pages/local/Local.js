import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'
import MerklePatriciaTree from '../../components/MerklePatriciaTree'
import styled from 'styled-components'
import {
  ContractForm,
  ContractData,
  LoadingContainer,
} from 'drizzle-react-components'
import LocalWeb3Provider from '../../LocalWeb3Provider'

const FormStyler = styled.div`
input {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
`
const Local = ({}) => {
  return (
    <FullscreenLayout styleCode={2}>
      <LocalWeb3Provider ws={'ws://127.0.0.1:8545'}>
        <LoadingContainer loadingComp={
          (
            <div>
              <label>Contracts are not migrated</label>
              <pre><code>
                git clone https://github.com/commitground/solidity-patricia-tree<br/>
                cd solidity-patricia-tree<br/>
                npm install<br/>
                npm run migrate
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
      </LocalWeb3Provider>
    </FullscreenLayout>
  )
}

export default Local
