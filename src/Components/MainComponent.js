import React from 'react';
import Header from './HeaderComponent';
import Login from '../Pages/LoginPage';
import { Switch, Route } from 'react-router-dom';
import Register from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';
import FooterComponent from './FooterComponent';

function MainComponent(props) {
    return (
        <div>
            <Header/>
            <Switch>
              <Route path='/login' exact component={Login}/>
              <Route path='/register' exact component={Register}/>
              <Route path='/profil' exact component={ProfilPage}/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default MainComponent;