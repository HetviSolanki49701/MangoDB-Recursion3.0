import React from "react";
import "./Header.css";

function Header() {
    return (
        <div>
          <div className="nav-header">
            <div className="brand-logo">
              <a href="#">
                <span className="logo-compact">
                  <img src="" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="header">
            <div className="header-content clearfix">
              <div className="header-left">
                <div className="input-group icons">
                  <div className="input-group-prepend">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search Dashboard"
                    />
                    <button className="nav-btn">
                      Home
                    </button>
                    <button className="nav-btn">
                      Diet Planner
                    </button>
                    <button className="nav-btn">
                      Excercise
                    </button>
                    <button className="nav-btn">
                      Fitness Coach
                    </button>
                    <button className="nav-btn">
                      Products
                    </button>
                    <button className="auth-btn">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <ul className="clearfix">
                  <li className="icons dropdown">
                    <div
                      className="user-img c-pointer position-relative"
                      data-toggle="dropdown"
                    >
                      <span className="activity active"></span>
                      <button>
                        <img src="" height="40" width="40" alt="" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}
    
export default Header;