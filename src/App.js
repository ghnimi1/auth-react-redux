import React, {  useEffect } from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './Contexts/AuthContext';
import { connect, useDispatch } from 'react-redux';
import { signedin } from './Redux/Actions';
import { apiRoutes } from './GlobalConstants/ApiRoutes';

function App(props) {
      
  const dispatch=useDispatch()
  const TokenLogin = async () => {
    const token = localStorage.getItem('TOKEN')
    if(token){
          dispatch(signedin())
    }
  }

  useEffect(()=>{  
    TokenLogin()
 },[apiRoutes.TokenLogin])

const {signedIn}=props
  return (
  <AuthContext.Provider value={{signedIn}}>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter> 
  </AuthContext.Provider>
  );
}

const mapStateToProps = state => ({
  signedIn:state.signedIn.signedIn,
})

export default connect(mapStateToProps,null) (App);
