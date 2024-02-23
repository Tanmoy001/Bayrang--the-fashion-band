import React, { useEffect,useState} from 'react'
import './updatepassword.css'
import { PiPasswordLight} from 'react-icons/pi';
import { useNavigate  } from 'react-router-dom';
import Loader from '../../../layout/Loader/Loader' 
import { UPDATE_PASSWORD_RESET } from '../../../constants/userConstant';
import shopic from "./shopic.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updatePassword } from '../../../actions/userAction';
import MetaData from '../../../layout/MetaData';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
function UpdatePassword() {
    
  const navigate  = useNavigate ();
    const dispatch = useDispatch();
     const {error,loading,isUpdated}=useSelector((state)=>state.user)
    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    const togglePasswordVisibility3 = () => {
        setShowPassword3(!showPassword3);
    };

const updatePasswordSubmit=(e)=>{
    // e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword",oldPassword);
    myForm.set("newPassword",newPassword);
    myForm.set("confirmPassword",confirmPassword);
    dispatch(updatePassword(myForm));
        }

useEffect(() => {
    if(error){
        alert(error)
        dispatch(clearErrors)
    }
    if(isUpdated){
        alert("Updated successfully")
        navigate('/account')
        dispatch({
            type:UPDATE_PASSWORD_RESET,
        })
    }



}, [dispatch,error,navigate,isUpdated])
    return (
        <>
        <MetaData title="Change Password" />
    {loading ? <Loader/>:(<>
    <div className="UpdatePasswordContainer">
    <div className='picture'>
        <img src={shopic} id="photo" alt=''/>
  
        </div>
        <div className='bay_icon'>
        <h2>बे</h2>
        </div>
       
    <div className='ChangePasswordBox'>
    
        <div>
        <div className='login_signUp_toggle'>
            <p>बेupdate Password</p>
        </div>
        </div>
        <form className='changePasswordForm' onSubmit={updatePasswordSubmit}>
        <div className='oldpassword'>
            <FaLock />
            <input
                type={showPassword1 ? 'text' : 'password'}
                placeholder='Old password'
                required
                value={oldPassword}
                onChange={(event) => {
                    setoldPassword(event.target.value);
                }}
            />
            {showPassword1 ? (
                <FaEyeSlash className='showpass' onClick={togglePasswordVisibility1} />
            ) : (
                <FaEye onClick={togglePasswordVisibility1} />
            )}
        </div>
            <div className='newPassword'>
               <PiPasswordLight/>
             {/*    newPassword: */}
             <input
                type={showPassword2 ? 'text' : 'password'}
                placeholder='New password'
                required
                value={newPassword}
                onChange={(event) => {
                    setnewPassword(event.target.value);
                }}
            />
            {showPassword2 ? (
                <FaEyeSlash className='showpass' onClick={togglePasswordVisibility2} />
            ) : (
                <FaEye onClick={togglePasswordVisibility2} />
            )}
        </div>

               
            <div className='confirmPassword'>
               <PiPasswordLight/>
               <input
                type={showPassword3 ? 'text' : 'password'}
                placeholder='Confirm password'
                required
                value={confirmPassword}
                onChange={(event) => {
                    setconfirmPassword(event.target.value);
                }}
            />
            {showPassword3 ? (
                <FaEyeSlash className='showpass' onClick={togglePasswordVisibility3} />
            ) : (
                <FaEye onClick={togglePasswordVisibility3} />
            )}
        </div>
            
            
            <input type='submit' value="Change Password" className='ChangePasswordBtn'onClick={updatePasswordSubmit()}/>

        </form>
    </div>
    </div>
    </>)}
    </>
  )
}

export default UpdatePassword