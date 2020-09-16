import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './long-logo.PNG'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbutton' href='#characters'> Characters </Nav.Link>
    <Nav.Link className='navbutton' href='#characters-create'> Create Character </Nav.Link>
    <Nav.Link className='navbutton' href="#change-password">Change Password</Nav.Link>
    <Nav.Link className='navbutton' href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbutton' href="#/">Home</Nav.Link>
    <Nav.Link className='navbutton' href="#sign-in">Sign In</Nav.Link>
    <Nav.Link className='navbutton' href="#sign-up">Sign Up</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand>
      <img className='long-logo' src={logo} alt='Logo' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto welcomeMessage">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
