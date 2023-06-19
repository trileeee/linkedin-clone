import React,{useEffect, useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './post';
import { db } from '../firebase';
import {collection,onSnapshot,addDoc,orderBy,serverTimestamp,query} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {doc,deleteDoc} from 'firebase/firestore';
import FlipMove from 'react-flip-move';


const Feed = () => {
    const user=useSelector(selectUser)
    const[message,setMessage]=useState('');
    const [posts,setPosts]=useState([]);

    
    // Get posts data from database evertime intial load occurs
    // onSnapshot to get snapshot from current data in database and real time update
    useEffect(()=>{
        onSnapshot(
            query(collection(db, "posts"), orderBy("timeStamp", "desc")),
            (snapshot)=> {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          })
    },[])
    // Send Posts data to database everytime user submit form
    const sendPost=(e)=>{
        e.preventDefault();
        setMessage('');
        addDoc((collection(db,"posts")),{
            name: user.displayName,
            description: user.email,
            message:message,
            photoUrl:'',
            timeStamp: serverTimestamp(),
            uid:user.uid,

        })
      .then(()=>{
        console.log('Post added')})
      .catch((err)=>{console.log(err)})
    }
    //delete Post function
    const deletePost=(id)=>{
        deleteDoc(doc(db,"posts",id))
            .then(()=>{console.log('Post deleted')})
            .catch((err)=>{console.log(err)})
    }

    return(
        // Feed Container
        <div className='flex flex-col flex-[0.5_1_0%]  mx-5 '>   
            {/* Input Container */}
            <div className=' p-5  rounded-xl mb-5 bg-white h-fit w-[100%]'>
                <div className='rounded-3xl border border-solid border-[lightgray] p-3 pl-4 flex flex-row'>
                <CreateIcon/>
                <form onSubmit={sendPost} className='flex border-none w-[100%]'action="">
                    <input value={message} onChange={(e)=>(setMessage(e.target.value))} className='outline-none flex flex-1' type="text" />
                    <button type="submit">Send</button>
                </form>
                </div>
                <div className='flex justify-around mt-2 items-center '>
                    <InputOption Icon={ImageIcon} title='Photo' color='blue'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='red'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='yellow'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='purple'/>
                </div>
            </div>
            {/* render post */}
                {/* Post */}
                <FlipMove>
                {posts.map(({id,data:{name,description,message,photoUrl,uid}})=>(
                    <Post
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    uid={uid}
                    deletePost={()=>deletePost(id)}
                />
                ))}
                </FlipMove>
                
        </div>
    )
}
export default Feed;