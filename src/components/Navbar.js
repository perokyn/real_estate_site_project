import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='fixed-top'>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className='d-flex align-items-center'>
        <img  alt='get a deal company logo'src={logo} style={{ width: '3rem', height: '3rem' }}></img>
        <small className="text-muted ">GetADeal</small>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/components/">Sellers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Buyers</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Rentals
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Home
                </DropdownItem>
                <DropdownItem>
                  Office
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Login</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

