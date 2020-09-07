import React, { useContext } from 'react';
import Header from './HeaderComponent';
import Login from '../Pages/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';
import FooterComponent from './FooterComponent';
import { AuthContext } from '../Contexts/AuthContext';

function MainComponent(props) {
    const {signedIn} = useContext(AuthContext)
    return (
        <div>
            <Header/>
            <Switch>
                {!signedIn ? <Route path='/register' exact component={Register}/> : null}
               <Route path='/profil' exact component={ProfilPage}/>
                {!signedIn ? <Route path='/login' exact component={Login}/> : null}
              
              <Redirect to='/login'/>
            </Switch>
            <FooterComponent/>
        </div>
    );
}

export default MainComponent;