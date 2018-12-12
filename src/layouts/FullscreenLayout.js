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
            {
              path: process.env.PUBLIC_URL + '/',
              title: process.env.NODE_ENV === 'production'
                ? 'Demo on Ropsten network'
                : 'Demo on the local net',
            },
            { path: process.env.PUBLIC_URL + '/manual', title: 'Manual' },
          ]
        }/>
        <div id="wrapper">
          <section className={classnames('wrapper', 'fullscreen',
            `style${this.props.styleCode}`)}>
            <div className="inner">
              {this.props.children}
            </div>
          </section>
        </div>
      </div>)
  }
}

export default FullscreenLayout
