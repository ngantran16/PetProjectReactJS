import React, { Component } from "react";
import "../css/Detail.css";
import Moment from "react-moment";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.comment = this.comment.bind(this);
    this.getComment = this.getComment.bind(this);
    this.updateUI = this.updateUI.bind(this);
    this.getComment(this.props.article_id);
  }
  getComment(id) {
    fetch("http://127.0.0.1:8000/api/comments/" + id).then((response) => {
      response.json().then((data) => {
        this.updateUI(data);
      });
    });
  }
  updateUI(data) {
    this.setState({
      comments: data,
    });
  }
  comment(event) {
    event.preventDefault();
    let user_id = localStorage.getItem("user_id");
    if (user_id) {
      let article_id = this.props.article_id;
      let name = event.target["name"].value;
      let email = event.target["email"].value;
      let content = event.target["content"].value;

      let comment = {
        user_id: user_id,
        article_id: article_id,
        name: name,
        email: email,
        content: content,
      };

      let commentInJson = JSON.stringify(comment);

      fetch("http://127.0.0.1:8000/api/user/comment", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: commentInJson,
      }).then((response) => {
        this.getComment(this.props.article_id);
        alert("Add comment successfully!");
      });
      event.target["name"].value = "";
      event.target["email"].value = "";
      event.target["content"].value = "";
    } else {
      alert("You must login to comment!");
    }
  }
  render() {
    return (
      <div>
        <div className="show-comments">
          <h3>Comments ({this.state.comments.length})</h3>
          {this.state.comments.map((item, index) => (
            <div className="comment-item">
              <h4>{item.name}</h4>
              <p>
                <span>{item.content}</span>
                <span className="comment-content">
                  <Moment>{item.created_at}</Moment>
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="form-comment">
          <h3>Leave a comment</h3>
          <form onSubmit={this.comment}>
            <div className="row">
              <div className="col-25">
                <label>Your Name</label>
              </div>
              <div className="col-75">
                <input
                  className="comment-input"
                  type="text"
                  name="name"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Email</label>
              </div>
              <div className="col-75">
                <input
                  className="comment-input"
                  type="text"
                  name="email"
                  placeholder="Your email.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label>Comment</label>
              </div>
              <div className="col-75">
                <textarea
                  className="comment-input"
                  name="content"
                  placeholder="Write something.."
                  height={300}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <button className="btn-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Comment;
