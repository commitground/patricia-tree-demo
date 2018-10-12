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
            { path: '/child', title: 'Child chain' },
            { path: '/root', title: 'Root chain' }
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
