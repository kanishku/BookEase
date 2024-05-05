import {  useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
//import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
 const user =false;
  //const { currentUser } = useContext(AuthContext);

  //const fetch = useNotificationStore((state) => state.fetch);
  //const number = useNotificationStore((state) => state.number);

  //if(currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>BookEase</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
       
    {/*
      <div className="user">
            <img src= "/noavatar.jpg" alt="" />
            <span></span>
           
            
              <span>Profile</span>
          
          </div>*/}
       
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        
        {/*
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
        */}
      </div>
    </nav>
  );
}

export default Navbar;
