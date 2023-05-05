import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };
  render() {
    return (
      <>
        <div
          className="card d-flex justify-content-center"
          style={{ width: 200 }}
        >
          <img
            src={this.state.product.photo}
            className="card-img-top"
            alt="hg"
          />
          <div className="card-body">
            <span className="text-muted">#{this.state.product.id}</span>
            <h5 className="card-title">{this.state.product.productName}</h5>
            <p className="card-text">${this.state.product.price}</p>
            <a href="#quantity" className="btn btn-primary">  {this.state.product.quantity}  </a>
            <div className="card-footer">
              <div className="float-left">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="pull-right hand-icon"
                    onClick={() => {
                      this.props.onDelete(this.state.product);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
              <div className="card-footer text-right">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
}
