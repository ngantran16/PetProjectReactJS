import React, { Component } from "react";
import "../css/Product.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { BsStarFill } from "react-icons/bs";

class ProductItem extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="grid-product-item">
        <p className="sale">{this.props.item.sale}%</p>
        <img
          src={"http://127.0.0.1:8000/storage/" + this.props.item.image}
          alt=""
          width={300}
          height={200}
        />
        <div className="body-product">
          <h3 className="product-name">{this.props.item.name}</h3>
          <p className="star">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </p>
          <p>
            <span className="product-price">
              <b>
                <NumberFormat
                  value={this.props.item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </b>
              <span> VND</span>
            </span>
            <span className="product-oldPrice">
              <strike>
                <NumberFormat
                  value={this.props.item.old_price}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </strike>
              <span> VND</span>
            </span>
          </p>
          <button className="btn-buy" onClick={onClick}>
            BUY
          </button>
        </div>
      </div>
    );
  }
}
export default ProductItem;
