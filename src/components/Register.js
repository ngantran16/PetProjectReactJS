import React,{Component} from 'react';
import '../css/Register.css';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();
        this.register = this.register.bind(this);
    }
    register(event){
        event.preventDefault();
        let username = event.target['username'].value;
        let password = event.target['password'].value;
        let email = event.target['email'].value;
        let address = event.target['address'].value;


        let user = {
            username:username,
            password:password,
            email:email,
            address: address
        }

        console.log(user);
        let userInJson = JSON.stringify(user);

        fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: userInJson
        })
        .then((response) => {
            console.log(response);
            this.props.history.push("/login");
        });
    }
    render(){
        return(
            <div>
                <img className="img-background" src="https://wallup.net/wp-content/uploads/2014/10/animal/Cat_And_Dog_Kissing.jpg"/>     
                <div className="form-register">
                    <h1 className="text-title">Register</h1>
                    <form onSubmit={this.register}>
                        <label>Username</label>
                        <input type="text" name="username" className="input-register" placeholder="Username.."/>

                        <label>Password</label>
                        <input type="password" name="password" className="input-register" placeholder="Password.."/>

                        <label>Email</label>
                        <input type="text" name="email" className="input-register" placeholder="Email.."/>

                        <label>Address</label>
                        <input type="text" name="address" className="input-register" placeholder="Address.."/>

                        <p>I accept the <span className="text-form">Terms of Use</span> & <span className="text-form">Privacy Policy</span></p>

                        <button className="btn-login" type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(Register);