import { Avatar } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import InputOption from './inputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MoreHoriz } from '@mui/icons-material';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import AvatarIcon from './avatar';

const Post = forwardRef(({ id,name, description, message, photoUrl,uid,deletePost }, ref) => {
  const user=useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [edit,setEdit]=useState(false);
  const [editMessage,setEditMessage]=useState(message);

  const editPost=()=>{
    updateDoc(doc(db,"posts",id),{message: editMessage,})
    .then(()=>{
      console.log('Post updated')
      setEdit(!edit)})
    .catch((err)=>{console.log(err)})
  }
  

  return (
    <div ref={ref} className="bg-white p-4 rounded-xl mt-2">
      <div className="flex mb-4">
        <AvatarIcon postAvatar={description}></AvatarIcon>
        <div className="ml-4 flex-grow">
          <h2 className="text-base font-bold">{name}</h2>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <div>
            {uid===user.uid && (
         <>
         {/* More post related function */}
        <MoreHoriz onClick={()=>setIsOpen(!isOpen)} className="text-gray-400 cursor-pointer" />
        {isOpen && (
        <div className="flex flex-col border-t py-2 absolute right-1 mt-2 bg-white rounded-xl shadow-md w-[50%] z-[9999] ">
            <div onClick={()=>{
                setEdit(!edit)
                setIsOpen(!isOpen)
                }} className="text-sm p-4 pl-5 w-full flex justify-start cursor-pointer hover:bg-[whitesmoke] ">
                <EditIcon fontSize="small"/>
                <span className='ml-2'>Edit</span>
            </div>
            <div onClick={deletePost} className="text-sm p-4 pl-5 w-full flex justify-start cursor-pointer hover:bg-[whitesmoke]">
              <DeleteIcon fontSize="small" />
              <span className='ml-2'>Delete</span>
            </div>
              
        </div>
        )}
        </>
        )}
        </div>
      </div>
      {/* Post Content */}
      <div className="break-words">
       { edit ?( 
        <form className="border rounded flex flex-col justify-around p-3 pb-0 pr-0 mt-2 w-full  bg-[#f2f2f2]">
          <input className="bg-[#f2f2f2] outline-none" value={editMessage} onChange={e=>setEditMessage(e.target.value)} />
          <div className="flex justify-end mt-6">
          <Button variant="outlined" onClick={()=>setEdit(!edit)} disableElevation >Cancel</Button>
          { (editMessage!==message) ? (<Button variant="outlined" onClick={editPost} disableElevation >Edit</Button>):(<Button variant="outlined" disabled disableElevation >Edit</Button>)
            }
       
          </div>
        </form>
        ) :(
        <p>{message}</p> 
        )}
      </div>
      <div className="border-t flex flex-row justify-around p-2 mt-2">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
