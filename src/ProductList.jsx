import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }



  render() {
    return (
      <div className="container-fluid">
        <center className="my-3">
          <h2>Shoping Cart</h2>
        </center>

        <div className="row d-flex justify-content-center gap-3">
          {this.state.products.map((prod,index) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-info">payment</button>

              </Product>
            );
          })}
        </div>
      </div>
    );
  }


 handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product ) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are sure to delete !")) 
      allProducts.splice(index, 1);

      this.setState({ products: allProducts });
    
  };

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    var prod = await response.json();
    console.log(prod);
    this.setState({ products: prod });
  };

  

}
