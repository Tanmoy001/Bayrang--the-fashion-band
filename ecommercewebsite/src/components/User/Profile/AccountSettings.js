import React, { Fragment,useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../../layout/MetaData";
import Loader from "../../../layout/Loader/Loader";
import'./accountsettings.css'
/* import { Link } from "react-router-dom"; */

import {  useNavigate } from "react-router-dom";
import { loadUser, updateProfile  } from "../../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../../constants/userConstant";
function AccountSettings() {

const { user} = useSelector((state) => state.user);

const { error, isUpdated, loading } = useSelector((state) => state.profile);

const navigate = useNavigate();
const [isEditing, setIsEditing] = useState(false);
const [editedUser, setEditedUser] = useState({ ...user });
//ALL THE INFORMATION 
const [avatar, setAvatar] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [address, setAddress] = useState("")
const [gender, setGender] = useState("")
const [pincode, setPincode] = useState("")
const [phonenumber, setPhonenumber] = useState("")
const [altphonenumber, setAltphonenumber] = useState("")
const [avatarPreview, setAvatarPreview] = useState("")
const [phoneEdit, setphoneEdit] = useState(false)

const dispatch = useDispatch();
const handleEditClick = () => {
  setIsEditing(true);
};
const editphonenumber =()=>{
  setphoneEdit(true)
}
const handleCancelClick = () => {
  // Reset the editedUser state or handle any other cancel logic.
  setEditedUser({ ...user });
  setIsEditing(false);
};
const registerDataChange=(e)=>{
if(e.target.name==="avatar"){
  const render = new FileReader();
  render.onload=()=>{
    if(render.readyState===2){
setAvatarPreview(render.result)
setAvatar(render.result)
    }
  }
  render.readAsDataURL(e.target.files[0])
}
}

const handleSaveClick = (e) => {
  e.preventDefault();
  const myForm = new FormData();
  myForm.set("avatar",avatar)
  myForm.set("name",name);
  myForm.set('email', email );
  myForm.set('address', address ) ;
  myForm.set('gender', gender ) ;
  myForm.set('pincode', pincode ) ;
  myForm.set('phonenumber', phonenumber ) ;
  myForm.set('altphonenumber', altphonenumber ) ;
  dispatch(updateProfile(myForm));
  // Save changes to API here...

  // You can implement logic to save the edited user data here.
  // For simplicity, we'll just update the state.
  setIsEditing(false);
};


const changePassword=()=>{
  navigate("/password/update");
}
useEffect(() => {
    if(user){
        setName(user.name);
        setEmail(user.email);
        setPhonenumber(user.phonenumber);
        setAltphonenumber(user.altphonenumber);
        setGender(user.gender);
        setAddress(user.address);
        setPincode(user.pincode);
        setAvatar(user.avatar.url);
        setAvatarPreview(user.avatar.url);
        
    }
    if(error){
        alert(error);
    }
    if(isUpdated){
        alert("profile updated successfully");
        dispatch(loadUser);
        window.location.href = '/account';
        dispatch({
            type:UPDATE_PROFILE_RESET,
        })
    }
 
}, [dispatch,navigate,error,isUpdated,user])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {isEditing?
        <MetaData title={`Profile Update `} />
          :  
          <MetaData title={`${user.name}'s Profile`} />
         
        }
          
           <div className="account-settings">
            {isEditing?(<h2>Edit Account Information</h2>):
            (<h2>Account Information</h2>)}
      
      <div className="avatar_container">
        <div className="avatar_info">
      <div className="account-avatar">
          {isEditing ? (
            <div className="avatar-upload">
              <div id='registerImage'>
                <img src={avatarPreview} alt='Avatar Preview'/>
                <input type='file'name='avatar' accept='image/*' onChange={registerDataChange}/>
            </div>
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
         value={name}  // Use the state variable directly
         onChange={(e) => setName(e.target.value)}
         autoFocus
       />
        ) : (
          <div className="setting-value">{name}</div>
        )}
      </div>
      
      {/* EMAIL OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Email</div>
        {isEditing ? (
               <input
               type="email"
               name="email"
               value={email}
               onChange={(event)=>{setEmail(event.target.value)}}
             />
        
        ) : (
          <div className="setting-value">{email}</div>
        )}
      </div>

      {/* PHONE NUMBER OF THE USER */}
      
      {/* <div className="setting-item">
        <div className="setting-label">Phone number</div>
        {isEditing ? (
          <input
            type="number"
            name="phonenumber"
            maxLength="10"
            value={phonenumber}
            onChange={(event)=>{setPhonenumber(event.target.value)}}
          />
        ) : (
          <div className="setting-value">{phonenumber?editedUser.phonenumber: 'Null' }</div>
        )}
      </div> */}

      <div className="setting-item">
        <div className="setting-label">Phone number</div>
        {
        isEditing ? (
          <div className="setting-value">{phonenumber?editedUser.phonenumber: 'Null' }</div>
        ) : (
        phoneEdit ? (
          <div className="phonenumberedit">
          <div className="oldnumbersection" style={{display:'flex',gap:'1rem'}}>
          <p>Old number</p>
          <div className="setting-value">{phonenumber?editedUser.phonenumber: 'Null' }</div>
          </div>
          <div className="newaltnumber" style={{display:"flex",gap:"1rem",alignContent:"center",flexWrap:"wrap"}}>
            <p style={{marginBottom:"0px"}}>New number</p>
            <input
            type="number"
            name="phonenumber"
            maxLength="10"
            value={phonenumber}
            onChange={(event)=>{setPhonenumber(event.target.value)}}
          />
          </div>
          <div className="button_segment"style={{marginTop:"14px"}}>
            <button style={{padding:"3px 16px"}} onClick={()=>setphoneEdit(false)}>Verify</button>
            <button style={{padding:"3px 16px"}} onClick={()=>setphoneEdit(false)}>Cancle</button>
          </div>
          </div>
        ) : (
          <div className="setting-value" style={{display:'flex',alignItems:"center",gap:'1rem'}}>{altphonenumber?editedUser.phonenumber: 'Null' }
          <div className="button_segment">
            <button style={{padding:"3px 16px"}} onClick={editphonenumber}>Edit</button>
          </div>
          </div>
        ))}
      </div>

       {/*ALTERNATE PHONE NUMBER OF THE USER */}
      
       <div className="setting-item">
        <div className="setting-label">Alt phone number</div>
        {
        isEditing ? (
          <div className="setting-value">{phonenumber?editedUser.phonenumber: 'Null' }</div>
        ) : (
          phoneEdit ? (
          <div className="phonenumberedit">
          <div className="oldnumbersection" style={{display:'flex',gap:'1rem'}}>
          <p>Old number</p>
          <div className="setting-value">{altphonenumber?editedUser.altphonenumber: 'Null' }</div>
          </div>
          <div className="newaltnumber" style={{display:"flex",gap:"1rem",alignContent:"center",flexWrap:"wrap"}}>
            <p style={{marginBottom:"0px"}}>New number</p>
          <input
            type="number"
            name="altphonenumber"
            value={altphonenumber}
            // onChange={(event)=>{setAltphonenumber(event.target.value)}}
          />
          </div>
          <div className="button_segment"style={{marginTop:"14px"}}>
            <button style={{padding:"3px 16px"}} onClick={()=>setphoneEdit(false)}>Verify</button>
            <button style={{padding:"3px 16px"}} onClick={()=>setphoneEdit(false)}>Cancle</button>
          </div>
          </div>
        ) : (
          <div className="setting-value" style={{display:'flex',alignItems:"center",gap:'1rem'}}>{altphonenumber?editedUser.altphonenumber: 'Null' }
          <div className="button_segment">
            <button style={{padding:"3px 16px"}} onClick={editphonenumber}>Edit</button>
          </div>
          </div>
        ))}
      </div>


      {/* GENDER OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Gender</div>
        {isEditing ? (
          <select name="gender" value={gender}  onChange={(event)=>{setGender(event.target.value)}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        ) : (
          <div className="setting-value">{gender}</div>
        )}
      </div>

      {/* ADDRESS OF THE USER */}
      
      <div className="setting-item">
        <div className="setting-label">Address</div>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={address}
            onChange={(event)=>{setAddress(event.target.value)}}
          />
        ) : (
          <div className="setting-value">{address?editedUser.address: 'Null' }</div>
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
            value={pincode}
            onChange={(event)=>{setPincode(event.target.value)}}
          />
        ) : (
          <div className="setting-value">{pincode?editedUser.pincode: 'Null' }</div>
        )}
      </div>

      {/* JOINED DATE OF THE USER */}

      <div className="setting-item">
        <div className="setting-label">Joined Date</div>
        <div className="setting-value">{String( user.createdAt).substring(0,10)}</div>
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

