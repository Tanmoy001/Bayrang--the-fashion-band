import React, { Fragment, useEffect,useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../../layout/MetaData";
import Loader from "../../../layout/Loader/Loader";
import'./accountsettings.css'
/* import { Link } from "react-router-dom"; */

import { Form, useNavigate } from "react-router-dom";
import { updateProfile } from "../../../actions/userAction";
function AccountSettings() {

const { user, loading, isAuthenticated } = useSelector((state) => state.user);
const navigate = useNavigate();
const [isEditing, setIsEditing] = useState(false);
const [editedUser, setEditedUser] = useState({ ...user });
//ALL THE INFORMATION 
const [name, setName] = useState(user.name)
const [email, setEmail] = useState(user.email)
const [address, setAddress] = useState(user.address)
const [gender, setGender] = useState(user.gender)
const [pincode, setPincode] = useState(user.pincode)
const [phonenumber, setPhonenumber] = useState(user.phonenumber)
const [altphonenumber, setAltphonenumber] = useState(user.altphonenumber)

const dispatch = useDispatch();
const handleEditClick = () => {
  setIsEditing(true);
};
const handleCancelClick = () => {
  // Reset the editedUser state or handle any other cancel logic.
  setEditedUser({ ...user });
  setIsEditing(false);
};

const handleSaveClick = (e) => {
  e.preventDefault();
  const myForm = new FormData();
  myForm.set("name",name);
  myForm.set('email', email );
  myForm.set('address', address ) ;
  myForm.set('gender', gender ) ;
  myForm.set('pincode', pincode ) ;
  myForm.set('phonenumber', phonenumber ) ;
  myForm.set('altphonenumber', altphonenumber ) ;
  dispatch(updateProfile(myForm));
  console.log("profile updated successfully")
  // Save changes to API here...

  // You can implement logic to save the edited user data here.
  // For simplicity, we'll just update the state.
  setIsEditing(false);
};


const changePassword=()=>{
  navigate("/password/update");
}


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
        <div className="profillename">Avatar</div>
        </div>
        </div>

      {/* NAME OF THE USER */}
      
      <div className="setting-item">
        
        <div className="setting-label">Full Name</div>
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
        <div className="setting-label">Email</div>
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
        <div className="setting-label">Phone number</div>
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
        <div className="setting-label">Alt phone number</div>
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
        <div className="setting-label">Gender</div>
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
        <div className="setting-label">Address</div>
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
        <div className="setting-label">Pin Code</div>
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
        <div className="setting-label">Joined Date</div>
        <div className="setting-value">{user.joinedDate}</div>
      </div>

       {/* BUTTON FOR EDIT AND SAVE */}

      <div className="setting-actions">
        {isEditing ? (
           <div className="button_segment">
            <button onClick={handleCancelClick}>Cancel</button>
          <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div className="button_segment">
          <button onClick={changePassword}>Change Password</button>
          <button onClick={handleEditClick}>Edit Profile</button>
       
      </div>
        )}
      </div>
    </div>
        </Fragment>
      )}
    </Fragment>
  
  )
}

export default AccountSettings
