import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import { apiRoutes } from '../GlobalConstants/ApiRoutes';
import { post } from '../GlobalConstants/ApiCalls';
import { Redirect, Link } from 'react-router-dom';

const Login = (props) => {

    const [redirect,setRedirect]=useState('')
const [errorMessage,setErrorMessage]=useState('')
const [userNameOrEmail,setUserNameOrEmail] = useState('')
const [passward,setPassward] = useState('')

// const {signedIn,setSignedIn}= useContext(AuthContext)

const hundleFormSubmission = async(e) => {
  e.preventDefault()
 
  var data = await post(apiRoutes.SignIn,{
      userNameOrEmail,
      passward
  })


  if (data.errors) {
      var errorstring = "";
      data.errors.map(error => errorstring = errorstring + error + '\n\r');

      setErrorMessage(errorstring);
  }
  else {
    localStorage.setItem("TOKEN",data.response.token);
    localStorage.setItem("USERID",data.response.userId);
    setRedirect('profil');
    
      
  }

  console.log(data);
  
}

if(redirect)
{
  return(
      <Redirect to={redirect}/>
  )
}

    return (
        <Form className='container' style={{ textAlign: 'center',marginTop:'50px' }}>
            <Jumbotron>
                <FormText 
                style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px" }}>Login</FormText>
                <FormGroup>
                    <Input type="email" name="email" 
                    id="exampleEmail" placeholder="Email" 
                    value={userNameOrEmail} onChange={(e) => setUserNameOrEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password"
                     id="examplePassword" placeholder="Password" 
                     value={passward} onChange={(e) => setPassward(e.target.value)}/>
                </FormGroup>
                <p style={{color:'red'}}>{errorMessage}</p>
                <Button style={{marginRight:"15px"}} onClick={hundleFormSubmission}>Log In</Button>
                <Link to='/register'>Create New Account</Link>
                </Jumbotron>
                
        </Form>
    );
}

export default Login;