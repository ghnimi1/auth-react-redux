import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import { signedout } from '../Redux/Actions';
import { useDispatch, connect } from 'react-redux';

const Header = (props) => {

  const dispatch=useDispatch()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signOut = async() => {
    await dispatch(signedout())
}

const {signedIn}=props

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

const mapStateToProps = state => ({
  signedIn:state.signedIn.signedIn
})

export default connect(mapStateToProps,null) (Header);