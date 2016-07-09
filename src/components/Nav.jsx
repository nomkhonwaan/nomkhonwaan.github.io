import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { onClickMenuButton } from '../actions/NavActions'

export const Nav = ({ dispatch, isExpanded, menuItems }) => {
  return (
    <nav className="layout-nav">
      <ul className={ classNames(
        'menu-list',
        { 'expanded': isExpanded }
      ) }>
        {
          menuItems.map((item, key) => {
            return (
              <li className="menu-item" key={ key }>
                <a href={ item.href }>
                  <i className={ item.iconClass }></i>&nbsp;{ item.title }
                </a>
              </li>
            )
          })
        }
      </ul>
      <button className="btn-toggle" onClick={ () => {
        dispatch(onClickMenuButton(isExpanded))
      } }>
        <i className="fa fa-fw fa-bars"></i>&nbsp;Menu
      </button>
    </nav>
  )
}

export default connect(
  (state) => ({
    ...state.nav
  })
)(Nav)