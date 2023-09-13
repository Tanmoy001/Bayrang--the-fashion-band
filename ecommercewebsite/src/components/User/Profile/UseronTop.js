// User.js
import React from 'react';
import hello from './hello.png'
const User = ({ user }) => {
  return (
    <div className="user-profile">
        <div className='userprofile'>
      <img src={user.avatar.url} alt="User Profile" />
      </div>
      <div className='hello_column'>
      <img src={hello} alt='welcome'/>
      <h2>Hello, {user.name}</h2>
      </div>
    </div>
  );
};

export default User;
