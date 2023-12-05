import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

class CaptchaTest extends Component {
  state = {
    showDiv: false,
    showMismatch: false,
  };
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      this.setState({ showDiv: true });

      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      this.setState({ showMismatch: true });
      document.getElementById("user_captcha_input").value = "";
    }
  };
  textBoxClick = () => {
    this.setState({ showDiv: false });
    this.setState({ showMismatch: false });
  };

  render() {
    const { showDiv } = this.state;
    const { showMismatch } = this.state;
    return (
      <div>
        <div className="container">
          <div className="form-group">
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>

            <div className="col mt-3">
              <div>
                <input
                  placeholder="Enter Captcha"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                  onClick={() => this.textBoxClick()}
                ></input>
              </div>
            </div>

            <div className="col mt-3">
              <div>
                <button
                  id="submit-button"
                  className="btn btn-primary"
                  onClick={() => this.doSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="col mt-3">
              {showDiv && <div>Captcha Matched</div>}
              {showMismatch && <div>Captcha Does Not Match</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaTest;
