import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="flex-row fixed-header">
        <div className="flex-col flex-center">
          <ul className="nav">
            <li>
              <a href="#" className="text-menu">
                HOME PAGE
              </a>
            </li>
            <li>
              <a href="#" className="text-menu">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="text-menu">
                SHOPPING
              </a>
            </li>
            <li>
              <a href="#" className="text-menu">
                NEWS
              </a>
            </li>
            <li>
              <a href="#" className="text-menu">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <button className="Login">Login</button>
        <button className="Register">Register</button>
      </div>
    );
  }
}
export default Header;
