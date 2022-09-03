import React from "react";
import Input from "./Input";

export default function FormInputs() {
  return (
    <div>
      <Input
        title="Mobile Number or Email"
        name="emailOrPhone"
        required="true"
        autocapitalize="off"
        type="text"
      />
      <Input
        title="Full Name"
        name="fullName"
        required="false"
        autocapitalize="sentences"
        type="text"
      />
      <Input
        title="Username"
        name="username"
        required="true"
        autocapitalize="off"
        type="text"
        maxlength="30"
      />
      <Input
        title="Password"
        name="password"
        required="true"
        autocapitalize="off"
        type="password"
      />
    </div>
  );
}
