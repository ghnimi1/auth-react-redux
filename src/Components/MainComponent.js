import React, { useContext } from 'react';
import Header from './HeaderComponent';
import Login from '../Pages/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';
import FooterComponent from './FooterComponent';
import PrivateRoute from '../PrivateRoute';

function MainComponent(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/register' exact component={Register} />
                <PrivateRoute path='/profil' exact component={ProfilPage} />
                <Route path='/login' exact component={Login} />
            </Switch>
            <FooterComponent />
        </div>
    );
}

export default MainComponent;