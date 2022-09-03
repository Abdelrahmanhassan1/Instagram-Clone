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
              <img src={instagram} style={{ marginTop: "30px" }}></img>
              <form className={LoginStyle.form}>
                <div className={LoginStyle.input_Btn_Container}>
                  <input
                    type="text"
                    placeholder="Phone number, username, or email"
                  ></input>
                  <input type="password" placeholder="Password"></input>
                  <button>Log In</button>
                  <div className={LoginStyle.spanContainer}>
                    <div className={LoginStyle.leftSpan}></div>
                    <div className={LoginStyle.middleSpan}>OR</div>
                    <div className={LoginStyle.rightSpan}></div>
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
              <img src={AppStore} height="40px"></img>
              <img src={GooglePlay} height="40px"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
