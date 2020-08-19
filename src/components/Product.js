import React, { Component } from "react";
import "../css/Product.css";
import { MdSearch } from "react-icons/md";
import ProductItem from "./ProductItem";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      newProducts: [],
      valueSearch: "",
    };
    this.getData();
    this.handleSearch = this.handleSearch.bind(this);
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDes = this.sortByPriceDes.bind(this);
    this.onItemClicked = this.onItemClicked.bind(this);
  }

  getData() {
    fetch("http://127.0.0.1:8000/api/products").then((response) => {
      response.json().then((data) => {
        this.updateUI(data);
      });
    });
  }
  updateUI(data) {
    this.setState({
      products: data,
    });
  }

  handleSearch = (search) => {
    let oldProducts = this.state.products;
    let newArr = [];
    if (search.length <= 0 || search === "") {
      newArr = oldProducts;
      window.location.reload();
    } else {
      let searchValue = search.toLowerCase();
      for (let item of oldProducts) {
        if (item.name.toLowerCase().indexOf(searchValue) > -1) {
          newArr.push(item);
        }
      }
    }
    this.setState({
      products: newArr,
      valueSearch: search,
    });
  };
  sortByPriceAsc() {
    this.setState((prevState) => ({
      products: this.state.products.sort((a, b) => a.price - b.price),
    }));
  }
  sortByPriceDes() {
    this.setState((prevState) => ({
      products: this.state.products.sort((a, b) => b.price - a.price),
    }));
  }
  onItemClicked(item) {
    return (event) => {
      let user_id = localStorage.getItem("user_id");
      if (user_id) {
        item.user_id = user_id;
        let itemInJson = JSON.stringify(item);
        fetch("http://127.0.0.1:8000/api/user/addToCart", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: itemInJson,
        }).then((response) => {
          alert("Add to cart successfully!");
        });
      } else {
        alert("You must login to buy products!");
      }
    };
  }
  render() {
    return (
      <div className="container-product">
        <div className="search-product">
          <input
            className="searchTerm-product"
            placeholder="Search..."
            value={this.state.valueSearch}
            onChange={(event) => this.handleSearch(event.target.value)}
          />
          <button type="submit" className="searchButton-product">
            <MdSearch />
          </button>
        </div>
        <div className="grid-item">
          <button className="SortAsc" onClick={this.sortByPriceAsc}>
            <FaSortAmountUpAlt />
          </button>
          <button className="SortDes" onClick={this.sortByPriceDes}>
            <FaSortAmountDown />
          </button>
          <div className="grid-product">
            {this.state.products.map((item, index) => (
              <ProductItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
