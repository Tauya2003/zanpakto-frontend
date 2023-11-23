import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <section className="top-section"></section>

      <section className="container">
        <div className="login-container">
          <div className="login-card">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
            <h1>Login</h1>
            <form>
              <div className="input-container">
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-container">
                <input type="password" placeholder="Password" />
              </div>

              <button type="submit">Login</button>
            </form>

            <div className="login-footer">
              <p className="register-link">
                Don't have an account?{" "}
                <a onClick={() => navigate("/create-account")}>Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
