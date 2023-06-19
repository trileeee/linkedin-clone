
    import React from 'react';
    import { useSelector } from 'react-redux';
    import { selectUser } from '../features/userSlice';
    import AvatarIcon from './avatar';

    const Sidebar = () => {
        const user=useSelector(selectUser);
        const recentItem=(topic)=>(
            <div className='flex flex-row text-gray-400 text-xs font-semibold p-1 cursor-pointer hover:bg-[whitesmoke] hover:text-black'>
                <span>#</span>
                <p>{topic}</p>
            </div>
        )
        return(
            <div className='flex top-20 flex-[0.15] sticky flex-col items-center rounded h-fit'>
                {/* Sidebar top */}
                <div className="flex flex-col items-center border border-b-0 rounded-t-xl bg-white pb-3   w-[100%]">
                    <img className='mb-[-2rem] w-[100%] h-[3.75rem] rounded-t-xl object-cover ' src="https://images.unsplash.com/photo-1584531979583-18c5c4b25efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    <AvatarIcon className='m-3'></AvatarIcon>
                    <h2 className='text-sm font-bold'>{user.displayName}</h2>
                    <h4 className='text-gray-400 text-xs'>Bio</h4>      
                </div>
                <div className="w-[100%] p-3 border border-b bg-white rounded-b-xl ">
                {/* Sidebar stats */}
                <div className="flex mt-2 justify-between"> <p className='font-medium text-gray-400 text-sm'> Who viewed you</p> <p className='font-medium text-gray-400 text-sm'>2000</p></div> 
                <div className="flex mt-2 justify-between">  <p className='font-medium text-gray-400 text-sm'>Views on post</p> <p className='font-medium text-gray-400 text-sm'>2000</p></div> 
                <div className="flex mt-2 justify-between"> <p className='font-medium text-gray-400 text-sm'>Connection</p> <p className='font-medium text-gray-400 text-sm'>2000</p></div>  
                </div>
                <div className='flex flex-col items-start mt-3 p-3 border bg-white rounded-xl w-[100%]'>
                    {/* Sidebar recent */}
                    <p>Recent</p>
                    {recentItem('Web development')}
                    {recentItem('Programming')}
                    {recentItem('Software engineering')}
                    {recentItem('ReactJS')}
                    
                </div>
            
        
            </div>
        )
    }
    export default Sidebar;