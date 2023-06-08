
import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import Feed from "./component/feed";
import Header from "./component/header";
import Login from "./component/login";
import Sidebar from "./component/sidebar";
import { selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from "./component/register";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from "react-redux";
import {auth} from './firebase';
import {login,logout} from './features/userSlice';
import Widget from "./component/widget";

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();


  // Keep the user logged in even after refresh 
  useEffect(() => {
    onAuthStateChanged(auth,(userAuth) => {
      //check if there is a authenticated user
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="flex bg-[#f3f2ef] flex-col " >
      <Header/> 
      {!user ?(
             <Router>
             <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/register" element={<Register />} />
             </Routes>
           </Router>
       

      ) :(

        <div className="flex mt-7 mx-10 ml-16">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      )}
      </div>
  );
}

export default App;
