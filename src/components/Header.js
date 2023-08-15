import { NavLink } from 'react-router-dom'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="mainHeader">
          <NavLink to="/">Михаил Агапов</NavLink>
        </div>
        <input
          className="inputHeader"
          type="search"
          placeholder="Поиск по странице"
        />

        <div className="linkHeader">
          <NavLink to="/about">Обо мне</NavLink>
          <NavLink to="/running">Про бег</NavLink>
        </div>
      </header>
    </>
  )
}

export default Header
