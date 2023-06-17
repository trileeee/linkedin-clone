import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { login } from '../features/userSlice';
import { auth } from '../firebase';

const Login=()=> {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();

    const logintoApp=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                
            }))
        })
        .catch(error=>alert(error));

    }
    return (
        <div className='grid place-items-center ml-auto mr-auto pt-20 pb-20 bg-white w-full h-full' >
            
            <form className='flex flex-col '>
                <img className="w-80 h-15" src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" />
                <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-2 w-80 h-12 pl-3 mb-3 border-radius text-base rounded-md"
          type="email"
          placeholder="Email"
        />
                <input value={password} onChange={e=>{setPassword(e.target.value)}} className='border-2 w-80 h-12 pl-3 mb-3 border-radius text-base rounded-md' type="password" placeholder="Password"/>
                <button type="submit"  className='w-80 h-12 bg-[#0074b1] rounded-xl text-base text-white' onClick={logintoApp}>Sign in</button>
                
            </form>
            <p className='mt-4'>
                Not a member? 
              <Link to="/register"><span className='text-[#0177b7]'> Register now</span></Link>  
            </p>

        </div>
    )
}

export default Login;