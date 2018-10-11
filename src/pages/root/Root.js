import React from 'react'
import Fullscreen from '../../layouts/Fullscreen'
import { networks } from '../../../truffle'

const Root = ({ accounts, drizzleStatus, networkId }) => {
  const treeMap = (
    <Fullscreen>
      <label>Pre requisites</label>
      <pre><code>
          npm install -g ganache-cli
      </code></pre>

      <label>Run the following networks together</label>
      <pre><code>
        ganache-cli -p 9546 -i 423123 # root network <br/>
        ganache-cli -p 9547 -i 423124 # child network
      </code></pre>

      <label>Migrate contracts</label>
      <pre><code>
          truffle migrate --network root <br/>
          truffle migrate --network child
      </code></pre>
      <h2>{networkId}</h2>
    </Fullscreen>
  )
  const warning = (
    <Fullscreen>
      <h2>For this page, you should change your metamask network to the "root network"</h2>
      <ul>
        <li>Check that you are running <code>ganache-cli</code> with network id <strong>{networks.root.network_id}</strong> and port
          number <strong>{networks.root.port}</strong></li>
        <li>Check your metamask network is using <strong>http://localhost:{networks.root.port}</strong></li>
        <li>Please see <a href={'/'}>instruction</a></li>
      </ul>
    </Fullscreen>
  )

  const isOnRootNetwork = networkId === networks.root.network_id
  return isOnRootNetwork ? treeMap : warning
}

export default Root
