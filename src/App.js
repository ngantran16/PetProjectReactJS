import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import New from "./components/New";
import Login from "./components/Login";
import Register from "./components/Register";
import Detail from "./components/Detail";
import Product from "./components/Product";
import Cart from "./components/Cart.js";
import { FaCartPlus } from "react-icons/fa";

class App extends React.Component {
  constructor() {
    super();
    let checkLogin = localStorage.getItem("user_id");
    let check = checkLogin ? "on" : "off";
    this.state = {
      checkLogin: check,
    };
    this.onLogout = this.onLogout.bind(this);
    this.onLoginClicked = this.onLoginClicked.bind(this);
  }
  onLogout() {
    localStorage.removeItem("user_id");
    this.setState({
      checkLogin: "off",
    });
  }
  onLoginClicked() {
    this.setState({
      checkLogin: "on",
    });
  }
  render() {
    return (
      <Router>
        <div className="flex-row fixed-header">
          {this.state.checkLogin === "on" ? <p>Welcome user</p> : null}
          <div className="flex-col flex-center">
            <ul className="nav">
              <li>
                <Link to="/articles" className="text-menu">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/home" className="text-menu">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-menu">
                  SHOPPING
                </Link>
              </li>
              <li>
                <Link to="/home" className="text-menu">
                  NEWS
                </Link>
              </li>
              <li>
                <Link to="/home" className="text-menu">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          {this.state.checkLogin === "on" ? (
            <div>
              <Link to="/cart">
                <button className="Cart">
                  <FaCartPlus />
                </button>
              </Link>
              <button className="Register" onClick={this.onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/register">
                <button className="Register">Register</button>
              </Link>
              <Link to="/login">
                <button className="Login">Login</button>
              </Link>
            </div>
          )}
        </div>
        <Switch>
          <Route path="/" exact>
            <Slide />
            <New />
            <Footer />
          </Route>
          <Route path="/cart">
            <Slide />
            <Cart />
            <Footer />
          </Route>
          <Route path="/articles" exact>
            <Slide />
            <New />
            <Footer />
          </Route>
          <Route path="/products" exact>
            <Slide />
            <Product />
            <Footer />
          </Route>
          <Route path="/login">
            <Login onLogin={this.onLoginClicked} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path={"/articles/:id"}>
            <Detail />
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
