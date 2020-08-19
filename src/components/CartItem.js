import React, { Component } from "react";
import "../css/Cart.css";
import NumberFormat from "react-number-format";
class CartItem extends Component {
  render() {
    const { onPlusClicked, onMinusClicked, onClick } = this.props;
    return (
      <tr>
        <td>
          <img
            className="Image"
            src={"http://127.0.0.1:8000/storage/" + this.props.item.image}
            alt=""
          />
        </td>
        <td>{this.props.item.name}</td>
        <td>
          <NumberFormat
            value={this.props.item.price}
            displayType={"text"}
            thousandSeparator={true}
          />
          <span> VND</span>
        </td>
        <td>
          <button className="btn-minus" width={50} onClick={onMinusClicked}>
            -
          </button>
          <input
            readOnly
            className="InputNumber"
            type="text"
            value={this.props.item.quantity}
          />
          <button className="btn-plus" width={50} onClick={onPlusClicked}>
            +
          </button>
        </td>
        <td>
          <NumberFormat
            value={this.props.item.price * this.props.item.quantity}
            displayType={"text"}
            thousandSeparator={true}
          />
          <span> VND</span>
        </td>
        <td>
          <button className="ButtonDelete" onClick={onClick}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default CartItem;
