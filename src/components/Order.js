import React, { Component } from "react";
import "../css/Order.css";
import { withRouter } from "react-router";
import NumberFormat from "react-number-format";
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    let user_id = localStorage.getItem("user_id");
    this.getCartByUserID = this.getCartByUserID.bind(this);
    this.getCartByUserID(user_id);
    this.totalPayment = this.totalPayment.bind(this);
    this.onSubmitOrder = this.onSubmitOrder.bind(this);
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
  totalPayment(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }
    return total;
  }
  onSubmitOrder(event) {
    event.preventDefault();
    let fullname = event.target["fullname"].value;
    let email = event.target["email"].value;
    let address = event.target["address"].value;
    let cart = this.state.cart;
    let user_id = localStorage.getItem("user_id");

    let order = {
      user_id: user_id,
      fullname: fullname,
      email: email,
      address: address,
      products: cart,
    };

    console.log(order);
    let orderInJson = JSON.stringify(order);

    fetch("http://127.0.0.1:8000/api/user/order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: orderInJson,
    }).then((response) => {
      alert("Order successfully!");
      this.props.history.push("/products");
    });
  }
  render() {
    const { cart } = this.state;
    return (
      <div className="order-container">
        <div className="grid-container">
          <div className="item1">
            <form onSubmit={this.onSubmitOrder}>
              <h3>Order Form</h3>
              <label for="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fullname"
                className="input-order"
                placeholder="John M. Doe"
              />
              <label for="email">Email</label>
              <input
                type="text"
                className="input-order"
                name="email"
                placeholder="john@example.com"
              />
              <label for="adr">
                <i class="fa fa-address-card-o"></i> Address
              </label>
              <input
                type="text"
                className="input-order"
                name="address"
                placeholder="542 W. 15th Street"
              />
              <button type="submit" className="btn">
                Order
              </button>
            </form>
          </div>
          <div className="item2">
            <h4>
              Cart <span className="price"></span>
            </h4>
            {cart.map((item, index) => (
              <div>
                <p>
                  {item.name}
                  <span className="product-price">
                    {item.quantity} x {item.price} VND
                  </span>
                  <span className="product-price">
                    <img
                      className="product-image"
                      src={"http://127.0.0.1:8000/storage/" + item.image}
                      alt=""
                    />
                  </span>
                  <span className="product-price">
                    <NumberFormat
                      value={item.price * item.quantity}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <span> VND</span>
                  </span>
                </p>
              </div>
            ))}
            <p>
              <b>Total: </b>
              <b>
                <NumberFormat
                  value={this.totalPayment(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                <span> VND</span>
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Order);
