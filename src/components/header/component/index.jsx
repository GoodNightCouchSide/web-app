import React from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import logoImage from 'assets/img/logo.svg'


const Header = () => {
   return <header>
              <div className="header-logo">
                <Link to="/">
                  <img src={logoImage} alt='gncs logo'/>
                </Link>
              </div>
              <div className="main-container">
               <Navbar variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/EventList">SHOWS</Link>
                    <NavDropdown title="WIKI" id="basic-nav-dropdown">
                      <LinkContainer to='/wikiBands'>
                        <NavDropdown.Item>Bands</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/wikiVenues'>
                        <NavDropdown.Item>Venues</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    <Link to="/AddShow">+ SHOW</Link>
                    <Link to="/AddWiki">+ WIKI</Link>
                    <Link to="/Underground">UNDERGROUND</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </div>
          </header>
 }

export default Header;