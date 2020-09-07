import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const Header = (props) => {

  const {signedIn,setSignedIn}= useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signOut = async() => {
    await localStorage.removeItem('TOKEN')
    await localStorage.removeItem('USERID')
    setSignedIn(false)
}

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand className='container' href="/">AUTH</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className='container' isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <h2>Auth-Redux</h2>
          </Nav>
          {signedIn ? <div style={{backgroundColor:'white',padding:'3px',marginRight:'10px'}} className='rounded-circle'>GH</div> : null}
          {signedIn ? <NavLink to='/login' style={{color:'black'}} onClick={signOut}>Log Out</NavLink> : null}
          {!signedIn ? <NavLink style={{color:'black'}}  to='/login'>Login</NavLink>:null}
          
          
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;