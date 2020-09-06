import React from 'react';
import Header from './HeaderComponent';
import Login from '../Pages/LoginPage';

function MainComponent(props) {
    return (
        <div>
            <Header/>
            <Login/>
        </div>
    );
}

export default MainComponent;