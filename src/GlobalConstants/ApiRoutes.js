const API_URL='https://api.yourchores.me/';
 exports.apiRoutes={
     //Auth
     SignUp:API_URL + `api/Auth/Register`,
     SignIn : API_URL + `api/Auth/Login`,
     TokenLogin : API_URL + `api/Auth/TokenLogin`,
     GetMyInfo: API_URL + `api/Auth/GetMyInfo`,


 }