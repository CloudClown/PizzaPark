import React from 'react';
import './HeaderPage.css';

const HeaderPage = () => {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <h3 className="nav-logo">PizzaMaker</h3>
          <ul className="nav-item">
            <li>
              <button className="btn btn1">Login</button>
            </li>
            <li>
              <button className="btn btn1">Register</button>
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
