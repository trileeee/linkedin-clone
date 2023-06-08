import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import InputOption from './inputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post= forwardRef(({name,description,message,photoUrl},ref)=>{
    return(
        // Post Container 
        <div ref={ref} className='bg-white p-4 rounded-xl mt-2'>
            {/* Post Header */}
            <div className='flex mb-3'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                {/* Post info */}
                <div className='ml-3' >
                    <h2 className='text-base font-bold'>{name}</h2>
                    <p className='text-xs text-gray-400'>{description}</p>
                </div>
            </div> 
            {/* Post body */}
            <div className='break-words'>
                <p >{message}</p>
            </div>
            {/* Reaction btn*/}
            <div className='border-t flex flex-row justify-around p-2 mt-2'>
                <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray'/>
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
            </div>

        </div>
    )

})
export default Post;