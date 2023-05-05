import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import History from "./History";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <>
        <form className="col-lg-9">
          <h4 className="m-1 p-2 border-bottom">Login</h4>

          <div className="form-group from-row">
            <label className="col-lg-4">Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
              autoComplete="true"
            />
          </div>

          <div className="form-group from-row">
            <label className="col-lg-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
              autoComplete="true"
            />
          </div>

          <div className="text-right">
            {this.state.message}

            <button className="btn btn-primary" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </form>
      </>
    );
  }

  onLoginClick = async (e) => {
    console.log(this.state);
    e.preventDefault();
    var response = await fetch(
      `http://localhost:5000/customers?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);

    if (body.length > 0) {
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
      this.props.set_login_false();
      // History.replace("/dashboard");
    } else {
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }
  };
}

export default Login;
