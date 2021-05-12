import React from 'react';
import { GoogleLogout } from 'react-google-login';

//Router pour la redirection
import { useHistory } from "react-router-dom";

const clientId =
  '409406405866-85h4ucuu8qjds192n8330s7g9pnlkgho.apps.googleusercontent.com';

function Logout() {
  let history = useHistory();
  
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    history.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;