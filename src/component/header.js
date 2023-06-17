import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderNav from './headerNavOption';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useNavigate} from 'react-router-dom';



const Header= () => {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const navigate=useNavigate();
    
    const handleLogout = () => {
        dispatch(logout());
        auth.signOut();
        navigate('/');

       
    }
    return (
        <>
        {/*Header*/}
        <div className='flex place-content-evenly items-center sticky top-0 border-b-[0.25px] py-[10px] z-50 border-gray-100 bg-white'>
            {/*Header Left*/}
            <div className='flex'>
                <img className='object-contain h-11' src="https://www.svgrepo.com/show/452047/linkedin-1.svg" alt="" />
                {/*Search Bar*/}
                <form className='p-2 flex items-center'>
                    <SearchIcon/>
                    <input className='bg-gray-100 rounded-[0.3rem] outline-none ml-2 h-8' type="text" placeholder="Search"  />
                </form>
                
            </div>
            {/*Header Right*/}
            <div className='flex '>
                <HeaderNav Icon={HomeIcon} navTitle="Home"></HeaderNav>
                <HeaderNav Icon={GroupIcon} navTitle="My Network"></HeaderNav>
                <HeaderNav Icon={BusinessCenterIcon} navTitle="Jobs"></HeaderNav>
                <HeaderNav Icon={MessageIcon} navTitle="Message"></HeaderNav>
                <HeaderNav Icon={NotificationsIcon} navTitle="Notifications"></HeaderNav>
               
                {user && <>
                <HeaderNav avatar={user?.photoURL} navTitle="Me"></HeaderNav>
                <HeaderNav Icon={LogoutRoundedIcon} navTitle="Log out" onClick={handleLogout}></HeaderNav> </> }
            </div>
        </div>
        </>

    )
}
export default Header;