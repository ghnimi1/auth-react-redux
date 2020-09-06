import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

const Login = (props) => {
    return (
        <Form className='container' style={{ textAlign: 'center',marginTop:'50px' }}>
            <Jumbotron>
                <FormText style={{ textAlign: 'center', fontWeight: 'bold', fontSize: "30px" }}>Login</FormText>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button>Connexion</Button></Jumbotron>
        </Form>
    );
}

export default Login;