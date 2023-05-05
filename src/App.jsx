import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Customer from "./Customer";
import ProductList from "./ProductList";
import Dashboard from "./Dashboard";
import UpdateCustomer from "./UpdateCustomer";
import PageNotFound from "./PageNotFound";
import NewCustomer from "./NewCustomer";
// import Logout from "./Logout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  // onLoginSuccess = () => {
  //   this.setState({ isLoggedIn: false });
  // };

  // onLogoutClick = () => {
  //   this.setState({ isLoggedIn: true });
  // };

  render() {
    return (
      <BrowserRouter>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Login set_login_false={this.login} />}
          ></Route>
          <Route path="/customer" exact element={<Customer />}></Route>
          <Route path="/product" exact element={<ProductList />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/update" exact element={<UpdateCustomer />}></Route>
          <Route path="/newcustomer" exact element={<NewCustomer />}></Route>
          {/* <Route path="/" exact element={<Logout setout={this.logout}/>}></Route> */}
          <Route path="/*" exact element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    );     
  }
  login = () => {
    this.setState({ isLoggedIn: false });
  };

  logout = () => {
    this.setState({ isLoggedIn: true, alert: "You are logout!!" });
  };
}
