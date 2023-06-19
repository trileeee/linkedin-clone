
import React from 'react';
import AvatarIcon from './avatar';

const HeaderNav = ({Icon,navTitle,onClick}) => {
   
    return(
        <div onClick={onClick} className='flex  items-center flex-col mr-10 cursor-pointer  text-gray-500  hover:text-black'>
        {Icon ? <Icon/> :(( <AvatarIcon className='!h-6 !w-6 object-contain ' ></AvatarIcon>))}
        <h3 className='font-normal text-xs'> {navTitle}</h3>
        </div>
    )
}
export default HeaderNav;