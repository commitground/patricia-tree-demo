import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'

const Instruction = () => {
  return (
    <FullscreenLayout>
      <label>Pre requisites</label>
      <pre><code>
          npm install -g ganache-cli
      </code></pre>

      <label>Run the following networks together</label>
      <pre><code>
        ganache-cli -p 9546 -i 423123 # child network <br/>
        ganache-cli -p 9547 -i 423124 # root network
      </code></pre>

      <label>Migrate contracts</label>
      <pre><code>
          truffle migrate --network child <br/>
          truffle migrate --network root
      </code></pre>
    </FullscreenLayout>
  )
}

export default Instruction
