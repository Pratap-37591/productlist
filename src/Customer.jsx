import React, { Component } from "react";
import "./index.css";
class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Customer Details",
      customersCount: 5,
      customers: [],
    };
  }
  customerNameStyle = (custName) => {
    if (custName.startsWith("a")) return {backgroundColor: "red"}
    else if (custName.startsWith("m")) return {backgroundColor: "yellow"};
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.title}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <center>
          <h2 className="display-6">{this.state.title}</h2>
        </center>

        <table className="table table-bordred">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">photo</th>
              <th scope="col">phone</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  componentDidMount = async () => {
    var x = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });

    var y = await x.json();
    console.log(y);
    this.setState({ customers: y });
  };

  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <>
          <tr key={cust.id}>
            <td>{cust.id}</td>

            <td style={this.customerNameStyle(cust.name)}> {cust.name}</td>

            <td>
              <img src={cust.photo} alt="" width={300} height={300} />
              <div>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    this.pictureclick(cust, index);
                  }}
                >
                  Change Picture
                </button>
              </div>
            </td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
        </>
      );
    });
  };

  pictureclick = (Product) => {
    let p = Math.floor(Math.random() * 100);
    let allCustomers = [...this.state.customers];
    let index = allCustomers.indexOf(Product);
    allCustomers[index].photo = `https://picsum.photos/id/${p}/200/300`;
    this.setState({ customers: allCustomers });
  };

  onChangeText = (text) => {
    let onText = [...this.state.customers];
    let index = onText.indexOf(text);
    onText[index].name = "gfgf";
    this.setState({ customers: onText });
  };

  componentDidCatch(error, info) {
    console.log(" componentDidCatch - cutomerList");

    console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }
}
export default Customer;
