import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: username,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: username,
              })
            );
          })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="grid place-items-center mf-auto mr-auto pt-20 pb-20 bg-white w-full h-full">
      <form className="flex flex-col">
        <img
          className="w-80 h-15"
          src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"
          alt=""
        />
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="border-2 w-80 h-12 pl-3 mb-3 border-radius text-base rounded-md"
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-2 w-80 h-12 pl-3 mb-3 border-radius text-base rounded-md"
          type="email"
          placeholder="Email"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border-2 w-80 h-12 pl-3 mb-3 border-radius text-base rounded-md"
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="w-80 h-12 bg-[#0074b1] rounded-xl text-base text-white"
        >
          Register now
        </button>
      </form>
    </div>
  );
};

export default Register;
