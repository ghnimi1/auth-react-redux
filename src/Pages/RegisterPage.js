
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom"
import { Form, FormGroup, Input, Button, Jumbotron, FormText } from "reactstrap";
import { post } from "../GlobalConstants/ApiCalls";
import { apiRoutes } from "../GlobalConstants/ApiRoutes";
import { register } from "../Redux/Actions/index";
import { useDispatch, useSelector, connect } from "react-redux";

function Register(props) {


  const [errorMessage, setErrorMessage] = useState('')
  const [redirect, setRedirect] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [passward, setPassward] = useState('')


  const dispatch = useDispatch()
  const errors = useSelector(state => state.signedIn.errors)
  const user = useSelector(state => state.signedIn.user)
  const hundleFormSubmission = (e) => {
    e.preventDefault()
    dispatch(register({ userName, email, passward }))
    if (user?.success === true) {
      window.location.replace('/login')
    } else {
      setErrorMessage(errors)
    }
  }

  if (redirect) {
    return (<Redirect to={redirect} />)

  }


  return (
    <Form className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
      <Jumbotron>
        <FormText
          style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px" }}>Create New Account</FormText>
        <FormGroup>
          <Input type="username" name="username"
            id="exampleUsername" placeholder="Username"
            value={userName} onChange={(e) => setUserName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email"
            id="exampleEmail" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password"
            id="examplePassword" placeholder="Password"
            value={passward} onChange={(e) => setPassward(e.target.value)} />
        </FormGroup>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <Button style={{ marginRight: "15px" }} onClick={hundleFormSubmission}>Register</Button>
        <Link to='/login'>Login </Link>
      </Jumbotron>

    </Form>
  );
}

export default Register;
