import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router'
import './../Assets/css/font-icons.css'
import logo from '../Assets/real-estate/images/logo.png'
import TopBar from './Topbar'

const Header = () => {
  return (
    <header className="dark header-size-md" data-sticky-shrink="false">
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <Navbar expand="lg" className="header-row header w-100 bg-real-estate" variant="dark">
        <Container className=' '>
          {/* Logo Section */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Canvas Logo" className="logo-default" style={{ height: '40px' }} />
          </Navbar.Brand>

          {/* Toggle Button for Responsive Menu */}
          <Navbar.Toggle aria-controls="navbar-nav" />
 
          {/* Collapsible Menu */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <NavLink className='nav-link' to="/properties">Buy</NavLink>
              <NavLink className='nav-link' to="/demo">Home</NavLink>
              <NavLink className='nav-link' to="/demo/?scrollTo=OurService">Services</NavLink>
              <NavLink className='nav-link' to="/demo/?scrollTo=QuickNote">Contact</NavLink>
              <NavLink className='nav-link' to="/demo/?scrollTo=WhyUs">Why Us?</NavLink>
              <NavLink className='nav-link' to="/about-us">About Us</NavLink>
              
              <NavDropdown title="More" id="nav-dropdown">
                <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Another Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3">Something Else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/4">Separated Link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Clone for Sticky Effect */}
      <div className="header-wrap-clone"></div>
      
    </header>
  )
}

export default Header