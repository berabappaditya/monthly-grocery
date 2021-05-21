import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, updateEmailText] = useState("");
  const [password, updatePasswordText] = useState("");
  let history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem("userToken", user.refreshToken);
      history.push("/home");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2> User Login</h2>
      </div>

      <div className="reg-form d-flex justify-content-center">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control border-warning"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => updateEmailText(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input
              type="password"
              className="form-control border-warning"
              id="InputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => updatePasswordText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-dark btn-light mt-3"
            onClick={(e) => handleLogin(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
