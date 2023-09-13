import React, { Fragment, useEffect,useState  } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../../layout/MetaData";
import Loader from "../../../layout/Loader/Loader";
import'./accountsettings.css'
/* import { Link } from "react-router-dom"; */

import { useNavigate } from "react-router-dom";
function AccountSettings() {

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
const navigate = useNavigate();
const [isEditing, setIsEditing] = useState(false);
const [editedUser, setEditedUser] = useState({ ...user });

const handleEditClick = () => {
  setIsEditing(true);
};

const handleSaveClick = () => {
  // You can implement logic to save the edited user data here.
  // For simplicity, we'll just update the state.
  setIsEditing(false);
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setEditedUser({
    ...editedUser,
    [name]: value,
  });
};


  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          {/* <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
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
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div> */}
          
           <div className="account-settings">
      <h2>Account Information</h2>
      <div className="avatar_container">
        <div className="avatar_info">
      <div className="account-avatar">
          {isEditing ? (
            <div className="avatar-upload">
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleChange}
              />
            </div>
          ) : (
            <img src={user.avatar.url} alt="User Avatar" />
          )}
        </div>
        <div className="profillename">Me</div>
        </div>
        </div>

      {/* NAME OF THE USER */}
      
      <div className="setting-item">
        
        <div className="setting-label">Full Name:</div>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.name}</div>
        )}
      </div>
      
      {/* EMAIL OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Email:</div>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.email}</div>
        )}
      </div>

      {/* PHONE NUMBER OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Phone number:</div>
        {isEditing ? (
          <input
            type="number"
            name="phonenumber"
            maxLength="10"
            value={editedUser.phonenumber}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.phonenumber?editedUser.phonenumber: 'Null' }</div>
        )}
      </div>

       {/*ALTERNATE PHONE NUMBER OF THE USER */}
      
       <div className="setting-item">
        <div className="setting-label">Alt phone number:</div>
        {isEditing ? (
          <input
            type="number"
            name="altphonenumber"
            maxlength="10"
            value={editedUser.altphonenumber}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.altphonenumber?editedUser.altphonenumber: 'Null' }</div>
        )}
      </div>


      {/* GENDER OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Gender:</div>
        {isEditing ? (
          <select name="gender" value={editedUser.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        ) : (
          <div className="setting-value">{editedUser.gender}</div>
        )}
      </div>

      {/* ADDRESS OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Address:</div>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.address?editedUser.address: 'Null' }</div>
        )}
      </div>

      {/* PINCODE OF THE USER */}

      <div className="setting-item">
        <div className="setting-label">Pin Code:</div>
        {isEditing ? (
          <input
            type="number"
            maxLength="7"
            name="pincode"
            value={editedUser.pincode}
            onChange={handleChange}
          />
        ) : (
          <div className="setting-value">{editedUser.pincode?editedUser.pincode: 'Null' }</div>
        )}
      </div>

      {/* JOINED DATE OF THE USER */}

      <div className="setting-item">
        <div className="setting-label">Joined Date:</div>
        <div className="setting-value">{user.joinedDate}</div>
      </div>

       {/* BUTTON FOR EDIT AND SAVE */}

      <div className="setting-actions">
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit Profile</button>
        )}
      </div>
    </div>
        </Fragment>
      )}
    </Fragment>
  
  )
}

export default AccountSettings
