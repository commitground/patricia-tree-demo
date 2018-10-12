import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'
import MerklePatriciaTree from '../../components/MerklePatriciaTree'
import styled from 'styled-components'
import { ContractForm, ContractData, LoadingContainer } from 'drizzle-react-components'
import PrivateNetWeb3Provider from '../../PrivateNetWeb3Provider'

const FormStyler = styled.div`
input {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
`
const Child = ({snapshot}) => {
  return (
    <FullscreenLayout styleCode={2}>
      <PrivateNetWeb3Provider ws={'ws://127.0.0.1:9546'} id={432123}>
        <LoadingContainer>
          <div>
            <div style={{ float: 'left', width: '70%', height: '90vh' }}>
              <MerklePatriciaTree/>
            </div>
            <div style={{ float: 'right', width: '30%', height: '90vh', wordBreak: 'break-all' }}>
              <h2>Current Root Hash</h2>
              <ContractData contract={'MerkluxTree'} method={'getRootHash'}/>
              <hr/>
              <h2>Insert items</h2>
              <FormStyler>
                <ContractForm contract="MerkluxTree" method="insert" sendArgs={{ gas: 1000000 }}/>
              </FormStyler>
              <hr/>
              <h2>Snapshots</h2>
              <button onClick={snapshot}>Get a snapshot</button>
            </div>
          </div>
        </LoadingContainer>
      </PrivateNetWeb3Provider>
    </FullscreenLayout>
  )
}

export default Child
