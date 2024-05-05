// Layout.js

import React from 'react';
import './Layout.css';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      {/* Display Navbar component */}
      <Navbar />

      {/* Display content based on router Outlet */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;


// The RequireAuth component is removed because it references backend-related context and logic.
// If you need authentication handling, you can implement it within a separate component or context.

// Example of basic authentication handling:
// Import necessary modules from React
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { Navigate, Outlet } from "react-router-dom";

// function RequireAuth() {
//   const { currentUser } = useContext(AuthContext);

//   if (!currentUser) return <Navigate to="/login" />;
//   else {
//     return (
//       <div className="layout">
//         <div className="navbar">
//           <Navbar />
//         </div>
//         <div className="content">
//           <Outlet />
//         </div>
//       </div>
//     );
//   }
// }

// export { RequireAuth };



/*
import "./Layout.css";
import Navbar from "../../components/Navbar";
//import { Navigate, Outlet } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };

//*/

/*

import "./Layout.css";
import Navbar from "../../components/Navbar";
//import { Navigate, Outlet } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
//*/