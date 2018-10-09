import React from 'react'
import classnames from 'classnames'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'

const Home = ({
                accounts,
                // SeasonContract,
                // SeasonContract2,
                drizzleStatus
              }) => {
  return (
    <div>
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              {/* Forms here */}
              {/*<li></li>*/}
            </ul>
          </nav>
        </div>
      </section>
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen">
          <div className="inner">
            {/* Draw trees here */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
