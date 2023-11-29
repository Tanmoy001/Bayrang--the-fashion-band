import React, { useEffect, useRef ,useState} from 'react'
import '../Login/loginsignup.css'
import { BiLogoGmail} from 'react-icons/bi';
import { PiPasswordLight} from 'react-icons/pi';
import { RxAvatar} from 'react-icons/rx';

import { useNavigate  } from 'react-router-dom';

import Loader from '../../../layout/Loader/Loader' 
import { login,clearErrors,register } from '../../../actions/userAction';
import { Link } from 'react-router-dom'
import shopic from "./shopic.jpg"
// import profile from "./Profile.png"
import { useDispatch, useSelector } from 'react-redux';

function UpdatePassword() {
    
  const navigate  = useNavigate ();
    const dispatch = useDispatch();
     const {error,loading,isAuthenticated}=useSelector((state)=>state.user)
    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)
    const [oldPassword, setoldPassword] = useState("")
    const [loginPassword, setloginPassword] = useState("")
const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    phonenumber:""
})
const {name,email,password,phonenumber}=user;

const LoginSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(loginEmail,loginPassword));
    }

const registerSubmit=(e)=>{
    
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name",name);
    myForm.set("email",email);
        }

const registerDataChange = (e) => {

        setUser((prevState)=>({...user,[e.target.name]:e.target.value}))
    
}

useEffect(() => {

}, [dispatch,error,isAuthenticated,navigate ])
    return (
        <>
    {loading ? <Loader/>:(<>
    <div className="LoginSignupContainer">
    <div className='picture'>
        <img src={shopic} id="photo" alt=''/>
  
        </div>
        <div className='bay_icon'>
        <h2>बे</h2>
        </div>
       
    <div className='LoginSignupBox'>
    
        <div>
        <div className='login_signUp_toggle'>
            <p>बेupdate Password</p>
        </div>
        </div>
        <form className='loginForm'ref={loginTab} onSubmit={LoginSubmit}>
            <div className='loginEmail'>
                <BiLogoGmail/>
               {/*  Email: */}
                <input type='password'placeholder='Old password'required value={oldPassword}
                onChange={(event)=>{setloginEmail(event.target.value)}}/>
            </div>
            <div className='phoneNumber'>
               <PiPasswordLight/>
             {/*    Password: */}
                <input type='password' placeholder='PAS**ORD' required value={loginPassword}
                onChange={(e)=>{setloginPassword(e.target.value)}}/>
            </div>
            
            <input type='submit' value="Change Password" className='LoginBtn'/>

        </form>

        <form className='signUpForm'ref={registerTab} onSubmit={registerSubmit}encType='multipart/form-data'>
            <div className='name'>
                <RxAvatar/>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
            </div>
            <div className='phoneNumber'>
                <BiLogoGmail/>
                <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    name="phonenumber"
                    value={phonenumber}
                    onChange={registerDataChange}
                  />
            </div>
            

        </form>


    </div>
    </div>
    </>)}
    </>
  )
}

export default UpdatePassword