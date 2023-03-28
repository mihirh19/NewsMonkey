// import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = (p) => {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink exact className="navbar-brand" to="/">Newsgenix</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact className="nav-link" to="/business">business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/general">general</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/health">health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/science">science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/sports">sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/technology">technology</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar