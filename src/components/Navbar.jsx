// import React, { Component } from 'react';
// import { Link,NavLink } from 'react-router-dom';

// class Navbar extends Component {
//     render() {
//         return (
//             <>

//             <nav>
//               <ul>
//                 <li>
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/service">Service</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/about">About</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/project">Project</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/blog">Blog</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact">Contact</NavLink>
//                 </li>
//               </ul>
//             </nav>

//           </>
//         );
//     }
// }

// export default Navbar;

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">Home</NavLink>
         
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;
