import React from "react";
import CSSModule from "./SignUp.module.css";
import Footer from "../../Footer/Footer";
import HaveAccount from "./HaveAccount";
import GetApp from "./GetApp";
import FormInfo from "./FormInfo";

export default function SignUp() {
  return (
    <div className={CSSModule.body}>
      <div className={CSSModule.container}>
        <FormInfo />
        <HaveAccount />
        <GetApp />
      </div>
      {/* ---------------------------------footer ---------------------------- */}
      <Footer />
    </div>
  );
}
