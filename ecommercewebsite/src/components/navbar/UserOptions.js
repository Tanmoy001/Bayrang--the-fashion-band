import React,{useState,useEffect} from 'react'
import'./userOptions.css'
//importing icons from materialui
import { SpeedDial,SpeedDialAction } from '@mui/material';
import { LuLayoutDashboard } from 'react-icons/lu'; 
import { BsFillPersonFill } from 'react-icons/bs'; 
import { IoLogOutOutline } from 'react-icons/io5'; 
import { MdOutlineFeaturedPlayList } from 'react-icons/md'; 
import { CgProfile } from 'react-icons/cg'; 
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
import { useNavigate  } from 'react-router-dom';
function UserOptions({isAuthenticated,user}) {
    const navigate  = useNavigate ();
    const dispatch = useDispatch();
    const orders =(e)=>{
        e.preventDefault();
        navigate(`/orders`)
    }
    const account =(e)=>{
        e.preventDefault();
        navigate(`/account`)
    }
    const logoutUser =(e)=>{
        dispatch(logout())
        
/*         window.location=`/login`
        e.preventDefault();
        alert("Logout successfully")
 */    }
    const dashboard=(e)=>{
        e.preventDefault();
        navigate(`/dashboard`)
    }
    const options=[
        
        {icon:<MdOutlineFeaturedPlayList/> ,name:"Orders",func:orders},
        {icon:<BsFillPersonFill/> ,name:"Profile",func:account},
        {icon:<IoLogOutOutline/> ,name:"Logout",func:logoutUser},
        
    ]
    console.log(isAuthenticated);
    if(user && user.role==="admin"){
        
        options.unshift({icon:<LuLayoutDashboard/> ,name:"DashBoard",func:dashboard},)
    }
    
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if(!isAuthenticated){
            navigate(`/login`);}
    }, [isAuthenticated,navigate])
  return (
    <>
      
            
       
            
        <div>
            {console.log(user.avatar.url)}
            <SpeedDial
            className='speedDial'
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
                   <SpeedDialAction key={item.name} icon={item.icon}tooltipTitle={item.name} onClick={item.func}/>
                    
                ))}
            </SpeedDial>
                
        </div>
       
    </>
  )
}

export default UserOptions
