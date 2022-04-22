import React from "react";
import "./Header.css";
import { BrowserRouter, Route, NavLink, useNavigate, Link, Routes } from "react-router-dom";
import pfp from '../../images/pfp.png'
import logo from '../../images/logo.png'
import logo_hori from '../../images/logo-hori.png'

function Header() {
  const navigate = useNavigate();
  function handleclickhome(e) {
    e.preventDefault();
    navigate("/home");
  }
  function handleclickprofile(e) {
    e.preventDefault();
    navigate("/profile");
  }
  function handleclickexercise(e) {
    e.preventDefault();
    navigate("/exercise");
  }
  function handleclickcoach(e) {
    e.preventDefault();
    navigate("/coach");
  }
  function handleclicklogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  function handleclickgyms(e) {
    e.preventDefault();
    navigate("/gyms");
  }
    return (
        <div>
          <div className="nav-header">
            <div className="brand-logo">
              <a href="#">
                <span className="logo-compact"  onClick={handleclickhome}>
                  <img src={logo_hori} alt="" />
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
                    <button className="nav-btn" onClick={handleclickhome}>
                      Home
                    </button>
                    <button className="nav-btn">
                      Diet Planner
                    </button>
                    <button className="nav-btn" onClick={handleclickexercise}>
                      Excercise
                    </button>
                    <button className="nav-btn"  onClick={handleclickcoach}>
                      Fitness Coach
                    </button>
                    <button className="nav-btn" onClick={handleclickgyms}>
                      Nearb Gyms
                    </button>
                    <button className="auth-btn" onClick={handleclicklogin}>
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
                      <button onClick={handleclickprofile}>
                        <img src={pfp} height="40" width="40" alt="" />
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