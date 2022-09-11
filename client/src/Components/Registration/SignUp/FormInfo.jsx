import React from "react";
import CSSModule from "./SignUp.module.css";
import InstagramIMG from "./images/instagram.png";
import { FaFacebookSquare } from "react-icons/fa";
// import FormInputs from "./FormInputs";
import FormPolicy from "./FormPolicy";

export default function FormInfo() {
  return (
    <div className={CSSModule.form_info}>
      <img src={InstagramIMG} alt="Instagram" />
      <form>
        <h2>
          Sign up to see photos and <br />
          videos from your friends.
        </h2>
        <button className={CSSModule.facebookButton}>
          <span>
            <FaFacebookSquare style={{ height: "30px", width: "18px" }} />
          </span>
          Log in with Facebook
        </button>

        <div className={CSSModule.or}>
          <div className={CSSModule.or_text}>OR</div>
        </div>

        <div className={CSSModule.input_Btn_Container}>
          <div className={CSSModule.input}>
            <input id="email" type="text" placeholder=" "></input>
            <label htmlFor="email" className={CSSModule.floatingLabel}>
              Phone number, username, or email
            </label>
          </div>
          <div className={CSSModule.input}>
            <input id="email" type="text" placeholder=" "></input>
            <label htmlFor="email" className={CSSModule.floatingLabel}>
              Full Name
            </label>
          </div>
          <div className={CSSModule.input}>
            <input id="email" type="text" placeholder=" "></input>
            <label htmlFor="email" className={CSSModule.floatingLabel}>
              Username
            </label>
          </div>
          <div className={CSSModule.input}>
            <input id="password" type="password" placeholder=" "></input>
            <label htmlFor="password" className={CSSModule.floatingLabel}>
              Password
            </label>
          </div>
        </div>
        {/* <FormInputs /> */}
        <FormPolicy />

        <button className={CSSModule.facebookButton}>Sign up</button>
      </form>
    </div>
  );
}
