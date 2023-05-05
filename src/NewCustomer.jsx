import React, { Component } from "react";

class NewCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      photo: "",
    };
  }

  submitPhoto(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ photo: e.target.value });
    };
    reader.readAsDataURL(file);
  }
  render() {
    console.log(typeof this.state.photo);
    return (
      <>
        <div>
          <h3>New Customers</h3>
          <form>
            <div>
              <label htmlFor={"text"}>Name:-</label>
              <input
                id={"text"}
                type={"text"}
                value={this.state.name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor={"number"}>Phone no:-</label>
              <input
                type="number"
                value={this.state.phone}
                onChange={(event) => {
                  this.setState({ phone: event.target.value });
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor={"text"}>Address:-</label>
              <input
                type="text"
                value={this.state.address}
                onChange={(event) => {
                  this.setState({ address: event.target.value });
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="img">Photo:-</label>
              <img src={this.state.photo} alt="alt" width={300} height={300} />
              <input
                type="file"
                onChange={(event) => this.submitPhoto(event)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">email:-</label>
              <input
                id="email"
                type={"email"}
                value={this.setState.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">password:-</label>
              <input
                type="password"
                id="password"
                value={this.setState.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>
            <br />
            {/* {this.state.message} */}
            <button type="submit" onClick={this.onLoginClick}>
              Login
            </button>
          </form>
        </div>
      </>
    );
  }

  onLoginClick = async () => {
    console.log(this.state);
    var res = await fetch(`http://localhost:5000/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    var body  = await res.json();
    console.log(body);
  };
}

export default NewCustomer;
