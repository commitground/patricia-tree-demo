import React from 'react'
import Fullscreen from '../../layouts/Fullscreen'
import { networks } from '../../../truffle'
import MerklePatriciaTree from '../../components/MerklePatriciaTree'
import styled from 'styled-components'
import { ContractForm, ContractData } from 'drizzle-react-components'

const FormStyler = styled.div`
input {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
`
const Child = ({ accounts, drizzleStatus, networkId, MerkluxTree }) => {
  const treeMap = (
    <Fullscreen styleCode={2}>
      <div style={{ float: 'left', width: '70%', height: '90vh' }}>
        <MerklePatriciaTree/>
      </div>
      <div style={{ float: 'right', width: '30%', height: '90vh', wordBreak: 'break-all' }}>
        <label>Current Root Hash</label>
        <ContractData contract={'MerkluxTree'} method={'getRootHash'}/>
        <FormStyler>
          <label>Insert items</label>
          <ContractForm contract="MerkluxTree" method="insert"/>
        </FormStyler>
      </div>
    </Fullscreen>
  )
  const warning = (
    <Fullscreen>
      <h2>For this page, you should change your metamask network to the "child network"</h2>
      <ul>
        <li>Check that you are running <code>ganache-cli</code> with network
          id <strong>{networks.child.network_id}</strong> and port
          number <strong>{networks.child.port}</strong></li>
        <li>Check your metamask network is using <strong>http://localhost:{networks.child.port}</strong></li>
        <li>Please see <a href={'/'}>instruction</a></li>
      </ul>
    </Fullscreen>
  )

  const isOnChildNetwork = networkId == networks.child.network_id
  return isOnChildNetwork && MerkluxTree.initialized ? treeMap : warning
}

export default Child
