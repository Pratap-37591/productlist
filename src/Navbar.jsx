import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-warning navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand">
            <img
              className="bg-dark rounded-3"
              src="https://img.icons8.com/fluency/32/null/google-logo.png"
              alt="ima"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/customer"
                  >
                    Customer
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/product"
                  >
                    ProductList
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {!this.props.isLoggedIn ? (
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {!this.props.isLoggedIn ? (
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/newcustomer"
                  >
                    NewCustomer
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {!this.props.isLoggedIn ? (
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/"
                    onClick={()=>this.props.setout()} 
                  >
                    
                    Logout
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
