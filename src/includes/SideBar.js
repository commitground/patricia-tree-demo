import React from 'react'
import { history } from '../store'
import { Link } from 'react-router-dom'

const locationToActive = (id) => {
  if (history.location.pathname) {
    return history.location.pathname === id ? 'active' : ''
  } else if (history.location.pathname === '') {
    return id === '/instruction' ? 'active' : ''
  }
}

const SideBar = ({ menus }) => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            {
              menus.map(item => {
                return (<li><Link to={item.path} className={locationToActive(item.path)}>{item.title}</Link></li>)
              })
            }
          </ul>
        </nav>
      </div>
    </section>
  )
}
export default SideBar
