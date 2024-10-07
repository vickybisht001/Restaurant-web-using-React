import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Feliciano </a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className={(e) => { return e.isActive ? 'active-col' : '' }}>Home</NavLink>
              <NavLink to="/about" className={(e) => { return e.isActive ? 'active-col' : '' }}>About</NavLink>
              <NavLink to="/menu" className={(e) => { return e.isActive ? 'active-col' : '' }}>Menu</NavLink>
              <NavLink to="/blog" className={(e) => { return e.isActive ? 'active-col' : '' }}>Stories</NavLink>
              <NavLink to="/contact" className={(e) => { return e.isActive ? 'active-col' : '' }}>Contact</NavLink>
              <div className='nav-btn'>
                <a href="#">Book a table</a>

              </div>
            </div>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar