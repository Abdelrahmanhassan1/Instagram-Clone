import React from "react";

// used images
import instagram from "./images/instagram.png";

//used style
import LoginStyle from "./Login.module.css";

function Login() {
  return (
    <div className={LoginStyle.main}>
      <img src={instagram}></img>

      <form className={LoginStyle.form}>
        <div class="form-floating mb-3 form-group" id={LoginStyle.inputDiv}>
          <input
            type="email"
            class="form-control form-control-sm"
            id="floatingInput inputsm"
            placeholder="name@example.com"
          />
          <label for="floatingInput inputsm">
            Phone number, username, or email
          </label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
