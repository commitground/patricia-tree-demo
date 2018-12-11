import React, { Component } from 'react'
import classnames from 'classnames'
import SideBar from '../includes/SideBar'

class FullscreenLayout extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <SideBar menus={
          [
            { path: '/', title: 'Instruction' },
            { path: '/local', title: 'Demo on the local net' },
            { path: '/ropsten', title: 'Demo on Ropsten network' },
          ]
        }/>
        <div id="wrapper">
          <section className={classnames('wrapper', 'fullscreen', `style${this.props.styleCode}`)}>
            <div className="inner">
              {this.props.children}
            </div>
          </section>
        </div>
      </div>)
  }
}

export default FullscreenLayout
