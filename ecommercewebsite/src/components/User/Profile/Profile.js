import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
import { HiTemplate } from 'react-icons/hi';
import { MdAccountBox } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import UseronTop from './UseronTop';
import AccountSettings from './AccountSettings';
import Loader from '../../../layout/Loader/Loader';
import { useSelector } from 'react-redux';
import'./profile.css'

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log("helo is tasfds")
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState('orders'); // Default tab
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const logout_account = () => {
    dispatch(logout());
  };

  const handleCombinedClick = () => {
    handleTabClick('logout'); // Call Function 1
    logout_account(); // Call Function 2
  };

  useEffect(() => {
    if (!isAuthenticated) {
      window.location="/login"
      navigate('/login'); // Redirect to the login page
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="profile-container">
          <UseronTop user={user} />
          <div className="profile-content">
            <div className="profile-sidebar">
              <ul>
                <li
                  className={selectedTab === 'orders' ? 'active' : ''}
                  onClick={() => handleTabClick('orders')}
                >
                  <HiTemplate />
                  Orders
                </li>
                <li
                  className={selectedTab === 'account' ? 'active' : ''}
                  onClick={() => handleTabClick('account')}
                >
                  <MdAccountBox />
                  Account Settings
                </li>

                <li onClick={() => handleCombinedClick()}>
                  <RiLogoutBoxRLine />
                  Logout
                </li>
              </ul>
            </div>
            <div className="profile-info">
              {selectedTab === 'orders' && <p>Orders Information</p>}
              {selectedTab === 'account' && <p><AccountSettings/></p>}
              {selectedTab === 'logout' && <p>Logout Information</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
