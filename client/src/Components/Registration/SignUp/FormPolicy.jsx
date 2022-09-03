import React from "react";
import CSSModule from "./SignUp.module.css";

export default function FormPolicy() {
  return (
    <div>
      <p className={CSSModule.policy}>
        People who use our service may have uploaded <br />
        your contact information to Instagram.{" "}
        <a href="https://www.facebook.com/help/instagram/261704639352628">
          Learn <br /> More
        </a>
        <br />
        <br />
        By signing up, you agree to our{" "}
        <a href="https://help.instagram.com/581066165581870">Terms</a>,{" "}
        <a href="https://www.facebook.com/privacy/policy">
          Privacy <br />
          Policy
        </a>{" "}
        and{" "}
        <a href="/legal/cookies/" tabindex="0" target="_blank">
          Cookies Policy.
        </a>
        <br />
        <br />
      </p>
    </div>
  );
}
