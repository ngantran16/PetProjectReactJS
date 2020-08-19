import React, { Component } from "react";
import "../css/Slide.css";

class Slide extends Component {
  render() {
    return (
      <div>
        <img
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/15/17/pixel-dogsofinstagram-3-15-19.jpg"
          className="image-title"
        />
        <div className="text dark">
          <div className="mona-sliderbanner">
            <h1>If you love your pet</h1>
            <h2>Take care of them</h2>
            <h3 className="online">Because the time you spend with them is</h3>
            <h3 className="online">Never redundant</h3>
          </div>
          <br></br>
          <a className="appointment">
            <span>MAKE AN APPOINTMENT</span>
          </a>
        </div>

        <div className="form-ct">
          <div className="form-pet-title">
            <h1>Free Consultation</h1>
          </div>
          <div className="form-pet">
            <input
              name="text-name"
              placeholder="Full name"
              className="input-side"
            />
          </div>
          <div className="form-pet">
            <input
              type="email"
              name="email-contact"
              placeholder="Email"
              className="input-side"
            />
          </div>
          <div className="form-pet">
            <textarea
              name="textarea-noidung"
              cols="40"
              rows="10"
              placeholder="Message"
              className="textarea"
            ></textarea>
          </div>
          <div className="form-pet-btn">
            <button className="button-send">Send</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Slide;
