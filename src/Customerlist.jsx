import React, { Component } from 'react'

export default class Customerlist extends Component {
constructor(props) {
  super(props)

  this.state = {
     pageTitle: "Cutomerlist",
     customercount: 4
  }
}

  render() {
    return (
      <div>
        <h4 className='m-1 p-1'>{this.state.pageTitle}</h4>
        <span className='badge bg-secondary m-2'> {this.state.customercount}</span>
        <Link to="/NewCustomer" className="btn btn-primary">
            NewCutomer 
        </Link>
      </div>
    )
  }
}
