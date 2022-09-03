import React from "react";
import CSSModule from "./SignUp.module.css";
import InstagramIMG from "./images/instagram.png";
import { FaFacebookSquare } from "react-icons/fa";
import FormInputs from "./FormInputs";
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

        <FormInputs />
        <FormPolicy />

        <button className={CSSModule.facebookButton}>Sign up</button>
      </form>
    </div>
  );
}
