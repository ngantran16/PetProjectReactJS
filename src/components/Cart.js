import React, { Component } from "react";
import "../css/Cart.css";
import CartItem from "./CartItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NumberFormat from "react-number-format";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    let user_id = localStorage.getItem("user_id");
    this.getCartByUserID = this.getCartByUserID.bind(this);
    this.getCartByUserID(user_id);
    this.onDeleteCart = this.onDeleteCart.bind(this);
    this.onPlusClicked = this.onPlusClicked.bind(this);
    this.onMinusClicked = this.onMinusClicked.bind(this);
  }
  getCartByUserID(id) {
    fetch("http://127.0.0.1:8000/api/user/cart/" + id).then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          cart: data,
        });
      });
    });
  }
  onDeleteCart(item) {
    return (event) => {
      let itemInJson = JSON.stringify(item);
      fetch("http://127.0.0.1:8000/api/cart/delete", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: itemInJson,
      }).then((response) => {
        this.getCartByUserID(localStorage.getItem("user_id"));
      });
    };
  }

  totalPayment(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }
    return total;
  }
  onPlusClicked(item) {
    return (event) => {
      let itemInJson = JSON.stringify(item);
      fetch("http://127.0.0.1:8000/api/cart/plus", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: itemInJson,
      }).then((response) => {
        this.getCartByUserID(localStorage.getItem("user_id"));
      });
    };
  }
  onMinusClicked(item) {
    return (event) => {
      let itemInJson = JSON.stringify(item);
      fetch("http://127.0.0.1:8000/api/cart/minus", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: itemInJson,
      }).then((response) => {
        this.getCartByUserID(localStorage.getItem("user_id"));
      });
    };
  }
  render() {
    const { cart } = this.state;
    return (
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th className="cart-th">Image</th>
              <th className="cart-th">Name</th>
              <th className="cart-th">Price</th>
              <th className="cart-th">Quantity</th>
              <th className="cart-th">Total</th>
              <th className="cart-th">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onClick={this.onDeleteCart(item)}
                onPlusClicked={this.onPlusClicked(item)}
                onMinusClicked={this.onMinusClicked(item)}
              />
            ))}
          </tbody>
        </table>
        <h3>Total Payments</h3>
        <table className="table-total">
          <tr className="table-border">
            <th>Provisional total:</th>
            <td>
              <NumberFormat
                value={this.totalPayment(cart)}
                displayType={"text"}
                thousandSeparator={true}
              />
              <span> VND</span>
            </td>
          </tr>
          <tr>
            <th>Total:</th>
            <td>
              <b>
                <NumberFormat
                  value={this.totalPayment(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </b>
              <span> VND</span>
            </td>
          </tr>
        </table>
        <Link to="/order">
          <button className="btn-payment">Payment</button>
        </Link>
      </div>
    );
  }
}
export default Cart;
