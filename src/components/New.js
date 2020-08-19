import React, { Component } from "react";
import "../css/New.css";
import { MdSearch } from "react-icons/md";
import NewItem from "./NewItem";

class New extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      newArticles: [],
      valueSearch: "",
    };
    this.getData();
    this.getNewArticle = this.getNewArticle.bind(this);
    this.getNewArticle();
    this.handleSearch = this.handleSearch.bind(this);
  }

  getData() {
    fetch("http://127.0.0.1:8000/api/articles").then((response) => {
      response.json().then((data) => {
        this.updateUI(data);
      });
    });
  }
  updateUI(data) {
    this.setState({
      articles: data,
    });
  }
  getNewArticle() {
    fetch("http://127.0.0.1:8000/api/articles/new").then((response) => {
      response.json().then((data) => {
        this.setState({
          newArticles: data,
        });
      });
    });
  }
  handleSearch = (search) => {
    let oldArticles = this.state.articles;
    let newArr = [];
    if (search.length <= 0 || search === "") {
      newArr = oldArticles;
      window.location.reload();
    } else {
      let searchValue = search.toLowerCase();
      for (let item of oldArticles) {
        if (item.title.toLowerCase().indexOf(searchValue) > -1) {
          newArr.push(item);
        }
      }
    }
    this.setState({
      articles: newArr,
      valueSearch: search,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="grid-item">
          <div className="wrap">
            <div className="search">
              <input
                className="searchTerm"
                placeholder="Search..."
                value={this.state.valueSearch}
                onChange={(event) => this.handleSearch(event.target.value)}
              />
              <button type="submit" className="searchButton">
                <MdSearch />
              </button>
            </div>
          </div>
          <div className="vertical-menu">
            <a href="#" className="active">
              <b>NEW ARTICLES</b>
            </a>
            {this.state.newArticles.map((item, index) => (
              <a href="#">
                <img
                  src={"http://127.0.0.1:8000/storage/" + item.image}
                  className="img-circle"
                />
                <span className="text-new">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-new">
            {this.state.articles.map((item, index) => (
              <NewItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default New;
