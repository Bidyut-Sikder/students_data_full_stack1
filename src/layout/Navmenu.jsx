import React from "react";
import myImg from "../images/DesignAGENCY.png";
import { NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md">
        <a href="" className="navbar-brand">
          <img src={myImg} alt="" />
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collaps"
          data-bs-target="#btn"
        >
          click
        </button>

        <div className="collaps navbar-collapse " id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/teampage" className="nav-link">
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="servicepage" className="nav-link">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projectpage'} className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/testimonialpage" className="nav-link">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item ">
            <button type="button" className="btn btn-outline-primary " style={{marginRight:'15px'}}>Login</button>

            </li>
            <li className="nav-item">
            <button type="button" style={{background:"#20B15A"}} className="btn  ml-1">Register</button>

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navmenu;
