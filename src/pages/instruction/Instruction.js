import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'

const Instruction = () => {
  return (
    <FullscreenLayout>
      <label>Run local block chain w/ ganache & deploy smart contract on to the
        private network</label>
      <pre><code>
        npm run chain<br/>
        npm run migrate
      </code></pre>
    </FullscreenLayout>
  )
}

export default Instruction
