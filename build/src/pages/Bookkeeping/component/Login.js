import React from 'react';

function Login() {
  return (
    <div>
      <form action="/server.js" method='POST'>
        <label htmlFor="name">Name</label><br />
        <input type="text" id='name'/><br />
        <label htmlFor="password">Password</label><br />
        <input type="text" id='password' />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;