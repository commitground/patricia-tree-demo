import React from 'react'
import FullscreenLayout from '../../layouts/FullscreenLayout'

const Instruction = () => {
  return (
    <FullscreenLayout>
      <label>Local environment</label>
      <pre><code>
        git clone https://github.com/commitground/solidity-patricia-tree<br/>
        cd solidity-patricia-tree<br/>
        npm install<br/>
        npm run chain<br/>
        npm run migrate<br/>
        npm run start<br/>
        # open http://localhost:3000
      </code></pre>
    </FullscreenLayout>
  )
}

export default Instruction
