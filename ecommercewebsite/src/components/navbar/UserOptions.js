import React,{useState} from 'react'
import'./userOptions.css'
//importing icons from materialui
import { SpeedDial,SpeedDialAction } from '@mui/material';
import { LuLayoutDashboard } from 'react-icons/lu'; 
import { BsFillPersonFill } from 'react-icons/bs'; 
import { IoLogOutOutline } from 'react-icons/io5'; 
import { MdOutlineFeaturedPlayList } from 'react-icons/md'; 
import { CgProfile } from 'react-icons/cg'; 
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
function UserOptions({isAuthenticated,user}) {
    const dispatch = useDispatch();
    const options=[
        
        {icon:<MdOutlineFeaturedPlayList/> ,name:"Orders",func:orders},
        {icon:<BsFillPersonFill/> ,name:"Profile",func:account},
        {icon:<IoLogOutOutline/> ,name:"Logout",func:logoutUser},
        
    ]
    console.log(isAuthenticated);
    if(user && user.role==="admin"){
        
        options.unshift({icon:<LuLayoutDashboard/> ,name:"DashBoard",func:dashboard},)
    }
    function dashboard(){
        Navigate('./dashboard')
    }
    function orders(){
        Navigate('/orders')
    }
    function account(){
        Navigate('./account')
    }
    function logoutUser(){
        dispatch(logout())
        alert.success("Logout successfully")
    }
    const [open, setOpen] = useState(false)
  return (
    <>
      
             {!isAuthenticated &&(
      <CgProfile/>  
        )}
        {isAuthenticated &&(
            
        <div>
            {console.log(user.avatar.url)}
            <SpeedDial
            ariaLabel='SpeedDial tooltrip example'
            onClose={()=>setOpen(false)}
            onOpen={()=>setOpen(true)}
            open={open}
            direction='down'
            icon={<img
            className='speedDialIcon'
            src={user.avatar.url?user.avatar.url:<CgProfile/>} 
            alt='Profile'
            />}
            >
                {options.map((item)=>(
                   <SpeedDialAction icon={item.icon}tooltipTitle={item.name} onClick={item.func}/>
                    
                ))}
            </SpeedDial>
                
        </div>
        )}
    </>
  )
}

export default UserOptions
