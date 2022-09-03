import React from "react";
import CSSModule from "./SignUp.module.css";

export default function Input(props) {
  return (
    <div className={CSSModule.formInput}>
      <label>
        <span>{props.title}</span>
        <input
          aria-label={props.title}
          aria-required={props.required}
          autocapitalize={props.autocapitalize}
          autocorrect="off"
          name={props.name}
          type={props.type}
          spellcheck="false"
          data-ms-editor="true"
          maxLength={props.maxLength}
          autoComplete="off"
        ></input>
      </label>
    </div>
  );
}
