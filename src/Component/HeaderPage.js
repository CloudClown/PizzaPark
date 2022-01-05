import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderPage.css';

const HeaderPage = () => {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <h3 className="nav-logo">PizzaMaker</h3>
          <ul className="nav-item">
            <li>
              <NavLink to="/login">
                <button className="btn btn1">Login</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="register">
                <button className="btn btn1">Register</button>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="welcome">
          <h1>Welcome to pizza maker</h1>
          <button className="btnWelcome btnW">Start making pizza</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
