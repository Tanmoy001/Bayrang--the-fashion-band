/* import React from 'react'
import MetaData from '../../../layout/MetaData'
import { Link } from 'react-router-dom'

function Profile({user}) {
  return (
    <div>
      <MetaData title={`${user.name}'s profile`} />
      <div className='profileContainer'>
        <div>
          <h1>My Profile</h1>
          <img src={user.avatar.url} alt={user.name}/>
          <Link to="/me/update">Edit Profile</Link>
        </div>
        <div>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined on </h4>
            <p>{String(user.createdAt).substring(0,10)}</p>
          </div>
          <div>
            <Link to='/orders'>My Orders</Link>
            <Link to ='/password/update'>Change Password</Link>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Profile
 */
// Profile.js
import React, { useState } from 'react';
import UseronTop from './UseronTop';
import'./profile.css'
import AccountSettings from './AccountSettings';
const Profile = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState('orders'); // Default tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="profile-container">
      <UseronTop user={user} />
      <div className="profile-content">
        <div className="profile-sidebar">
          <ul>
            <li
              className={selectedTab === 'orders' ? 'active' : ''}
              onClick={() => handleTabClick('orders')}
            >
              Orders
            </li>
            <li
              className={selectedTab === 'account' ? 'active' : ''}
              onClick={() => handleTabClick('account')}
            >
              Account Settings
            </li>
            <li onClick={() => handleTabClick('logout')}>Logout</li>
          </ul>
        </div>
        <div className="profile-info">
          {selectedTab === 'orders' && <p>Orders Information</p>}
          {selectedTab === 'account' && <p><AccountSettings/></p>}
          {selectedTab === 'logout' && <p>Logout Information</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
