import React from "react";
import CSSModule from "./SignUp.module.css";

export default function HaveAccount() {
  return (
    <div className={CSSModule.have_account}>
      <p>
        Have an account? <a href="../Login/Login.jsx">Log in</a>
      </p>
    </div>
  );
}
