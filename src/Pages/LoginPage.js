import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Input, FormText, Jumbotron } from 'reactstrap';
import { apiRoutes } from '../GlobalConstants/ApiRoutes';
import { post } from '../GlobalConstants/ApiCalls';
import { Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { connect, useDispatch, useSelector } from 'react-redux';
import { signedin } from '../Redux/Actions';

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [userNameOrEmail, setUserNameOrEmail] = useState('')
    const [passward, setPassward] = useState('')
    const user = useSelector(state => state.signedIn.user)
    const errors = useSelector(state => state.signedIn.errors)
    const dispatch = useDispatch()
    const hundleFormSubmission = (e) => {
        e.preventDefault()
        dispatch(signedin({ userNameOrEmail, passward }))
        if (user?.success === true) {
            window.location.replace('/profil')
        } else {
            setErrorMessage(errors)
        }
    }

    return (
        <Form className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
            <Jumbotron>
                <FormText
                    style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px" }}>Login</FormText>
                <FormGroup>
                    <Input type="email" name="email"
                        id="exampleEmail" placeholder="Email"
                        value={userNameOrEmail} onChange={(e) => setUserNameOrEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password"
                        id="examplePassword" placeholder="Password"
                        value={passward} onChange={(e) => setPassward(e.target.value)} />
                </FormGroup>
                <p style={{ color: 'red' }}>{errorMessage}</p>
                <Button style={{ marginRight: "15px" }} onClick={hundleFormSubmission}>Log In</Button>
                <Link to='/register'>Create New Account</Link>
            </Jumbotron>

        </Form>
    );
}

export default Login;