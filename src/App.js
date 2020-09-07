import React, { useState, useEffect } from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './Contexts/AuthContext';
import { authPost } from './GlobalConstants/ApiCalls';
import { apiRoutes } from './GlobalConstants/ApiRoutes';

function App(props) {
  const [signedIn,setSignedIn]=useState(false)

  const TokenLogin = async()=>{
    const token = localStorage.getItem('TOKEN')
    if (token) {
      var data = await authPost(apiRoutes.TokenLogin, {});

      if (data.success) {
        setSignedIn(true);
        await localStorage.setItem("TOKEN", data.response.token);
        await localStorage.setItem("USERID", data.response.userId);
      }
    }
}

useEffect(()=>{
   TokenLogin()
},[apiRoutes.TokenLogin])

  return (
  <AuthContext.Provider value={{signedIn,setSignedIn}}>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter> 
  </AuthContext.Provider>
  );
}

export default App;
