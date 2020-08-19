import React, { Component } from "react";
import { MdSearch } from "react-icons/md";
import "../css/Detail.css";
import { withRouter } from "react-router";
import { FiFacebook } from "react-icons/fi";
import Comment from "./Comment";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      newArticles: [],
    };
    this.id = this.props.match.params.id;
    this.getDetail(this.id);
    this.getDetail = this.getDetail.bind(this);
    this.getNewArticle = this.getNewArticle.bind(this);
    this.getNewArticle();
  }
  getDetail(id) {
    fetch("http://127.0.0.1:8000/api/articles/" + id).then((response) => {
      response.json().then((data) => {
        this.setState({
          articles: data,
        });
      });
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
  render() {
    return (
      <div className="container">
        <div className="grid-item">
          <div className="wrap">
            <div className="search-detail">
              <input
                type="text"
                className="searchTerm-detail"
                placeholder="Search..."
              />
              <button type="submit" className="searchButton-detail">
                <MdSearch />
              </button>
            </div>
          </div>
          <div className="vertical-menu-detail">
            <a href="#" className="active">
              <b>NEW ARTICLES</b>
            </a>
            {this.state.newArticles.map((item, index) => (
              <a href="#">
                <img
                  src={
                    "http://127.0.0.1:8000/storage/" +
                    item.image}
                  className="img-circle"
                />
                <span className="text-new">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail">
            <p className="content-detail">News</p>
            <h1 className="content-detail">{this.state.articles.title}</h1>
            <img
              src={"http://127.0.0.1:8000/storage/" + this.state.articles.image}
              alt=""
              className="image-detail"
            />
            <h3 className="content-detail">{this.state.articles.title}</h3>
            <p className="content-detail">{this.state.articles.content}</p>
            <button className="content-detail btn-facebook">
              <FiFacebook />
              Facebook
            </button>
            <button className="content-detail btn-google">Google+</button>
            <button className="content-detail btn-pinterest">Pinterest</button>
            <button className="content-detail btn-linkedin">LinkedIn</button>
          </div>
          <Comment article_id={this.id} />
        </div>
      </div>
    );
  }
}
export default withRouter(Detail);
