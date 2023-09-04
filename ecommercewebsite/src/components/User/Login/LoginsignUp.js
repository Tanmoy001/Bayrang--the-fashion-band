import React, { useRef ,useState} from 'react'
import './loginsignup.css'
import { BiLogoGmail} from 'react-icons/bi';
import { PiPasswordLight} from 'react-icons/pi';
import { RxAvatar} from 'react-icons/rx';

import { Link } from 'react-router-dom'
import shopic from "./shopic.jpg"
import profile from "./Profile.png"

function LoginsignUp() {
    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)
    const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] = useState("")
const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
})
const {name,email,password}=user;
const [avatar, setAvatar] = useState(profile);
const [avatarPreview, setAvatarPreview] = useState(profile);

const LoginSubmit=()=>{
    console.log("Loginsubmit");
    }

const registerSubmit=(e)=>{
    console.log('Register Submit');
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name",name);
    myForm.set("email",email);
    myForm.set("password",password);
    myForm.set("avatar",avatar);
        }

const registerDataChange=(e)=>{
    if(e.target.name === 'avatar'){
        const reader = new FileReader();
        reader.onloadend= () =>{
            if(reader.readyState===2){
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
        }
    }
    reader.readAsDataURL(e.target.files[0])
}
    else{
        setUser((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
}
    const switchTabs=(e,tab)=>{
        if (tab === "login"){
            //            console.log("login")
                       e.preventDefault();
            //            alert('hi')
            //                window.location="/";
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");
            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register"){
            //            console.log("login")
                       e.preventDefault();
            //            alert('hi')
            //                window.location="/";
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");
            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }

    }
    return (
    <>
    
    <div className="LoginSignupContainer">
    <div className='picture'>
        <img src={shopic} id="photo" alt=''/>
        </div>
    <div className='LoginSignupBox'>
      
        <div>
        <div className='login_signUp_toggle'>
            <p onClick={(e)=>switchTabs(e,"login")}>LOGIN</p>
            <p onClick={(e)=>switchTabs(e,"register")}>REGISTER</p>
        </div>
        <button ref={switcherTab}></button>
        </div>
        <form className='loginForm'ref={loginTab} onSubmit={LoginSubmit}>
            <div className='loginEmail'>
                <BiLogoGmail/>
               {/*  Email: */}
                <input type='email'placeholder='Email'required value={loginEmail}
                onChange={(event)=>{setloginEmail(event.target.value)}}/>
            </div>
            <div className='loginPassword'>
               <PiPasswordLight/>
             {/*    Password: */}
                <input type='password' placeholder='PAS**ORD' required value={loginPassword}
                onChange={(e)=>{setloginPassword(e.target.value)}}/>
            </div>
            <Link to ="/password/forgot">Forgot Password ?</Link>
            <input type='submit' value="Login" className='LoginBtn'/>

        </form>

        <form className='signUpForm'ref={registerTab} onSubmit={registerSubmit}encType='multipart/form-data'>
            <div className='name'>
                <RxAvatar/>
                <input name='name' type='text'placeholder='First Name'required value={name}
                onChange={(event)=>{registerDataChange(event.target.value)}}/>
            </div>
            <div className='signUpemail'>
                <BiLogoGmail/>
                <input name='email' type='email'placeholder='Email'required value={loginEmail}
                onChange={(event)=>{registerDataChange(event.target.value)}}/>
            </div>
            <div className='loginPassword'>
               <PiPasswordLight/>
             {/*    Password: */}
                <input name='password' type='password' placeholder='PAS**ORD' required value={loginPassword}
                onChange={(e)=>{setloginPassword(e.target.value)}}/>
            </div>
            <div id='registerImage'>
                <img src={avatarPreview} alt='Avatar Preview'/>
                <input type='file'name='avatar' accept='image/*' onChange={registerDataChange}/>
            </div>
           {/*  <input type='submit' value="Register" className='signUpBtn' disabled={loading?true:false}/> */}

        </form>


    </div>
    </div>
    </>
  )
}

export default LoginsignUp
