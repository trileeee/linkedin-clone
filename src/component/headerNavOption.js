import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const HeaderNav = ({avatar,Icon,navTitle,onClick}) => {
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          
        };
      }
    const user=useSelector(selectUser);
    return(
        <div onClick={onClick} className='flex  items-center flex-col mr-10 cursor-pointer  text-gray-500  hover:text-black'>
        {Icon ? <Icon/> :( avatar ? (<Avatar className='!h-6 !w-6 object-contain ' src={avatar} alt="" />) : ( <Avatar {...stringAvatar(user.email)} className='!h-6 !w-6 object-contain '>{user.email[0]}</Avatar>))}
        <h3 className='font-normal text-xs'> {navTitle}</h3>
        </div>
    )
}
export default HeaderNav;