import React from "react";

import { Link } from "react-router-dom";

// used images
import instagram from "./images/instagram.png";

//used style
import LoginStyle from "./Login.module.css";

//used components
import LeftPart from "./LeftPart";

// fontawesome imports
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// used images
import AppStore from "../images/appStore.png";
import GooglePlay from "../images/googlePlay.png";

function Login() {
  return (
    <div>
      <div className={LoginStyle.c1}>
        <div className={LoginStyle.main}>
          <LeftPart />
          <div>
            <div className={LoginStyle.rightPart}>
              <img
                src={instagram}
                style={{ marginTop: "30px" }}
                alt="logo"
              ></img>
              <form className={LoginStyle.form}>
                <div className={LoginStyle.input_Btn_Container}>
                  <div className={LoginStyle.input}>
                    <input id="email" type="text" placeholder=" "></input>
                    <label htmlFor="email" className={LoginStyle.floatingLabel}>
                      Phone number, username, or email
                    </label>
                  </div>
                  <div className={LoginStyle.input}>
                    <input
                      id="password"
                      type="password"
                      placeholder=" "
                    ></input>
                    <label
                      htmlFor="password"
                      className={LoginStyle.floatingLabel}
                    >
                      password
                    </label>
                  </div>

                  <button>Log In</button>

                  <div className={LoginStyle.or}>
                    <div className={LoginStyle.or_text}>OR</div>
                  </div>
                </div>
              </form>
              <button className={LoginStyle.Login_With_Facebook}>
                <span>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </span>
                Log in with Facebook
              </button>
              <div className={LoginStyle.ForgotPassword}>
                <a href="">Forgot password?</a>
              </div>
            </div>
            <div className={LoginStyle.rightPart2}>
              <p>
                Don't have an account? <a href="">Sign up</a>
              </p>
            </div>
            <div className={LoginStyle.rightPart3}>
              <p>Get the app.</p>
            </div>

            <div className={LoginStyle.rightPart4}>
              <img src={AppStore} height="40px" alt="AppStore"></img>
              <img src={GooglePlay} height="40px" alt="GooglePlay"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
