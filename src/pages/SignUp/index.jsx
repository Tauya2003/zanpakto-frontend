import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { postToAPI } from "../../utils/postToAPI";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // fuction to clear the form
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  // function to check if all fields are filled and if they are return true
  const checkForm = () => {
    if (!fullName) {
      alert("Please enter your full name");
      return;
    }
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!phoneNumber) {
      alert("Please enter your phone number");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    if (!confirmPassword) {
      alert("Please confirm your password");
      return;
    }
    return true;
  };

  const checkEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    return true;
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    return true;
  };

  const handleCancel = () => {
    const confirm = window.confirm("Are you sure you want to cancel?");
    if (!confirm) return;
    clearForm();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkForm()) return;
    if (!checkEmail()) return;
    if (!checkPassword()) return;

    const data = {
      name: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    // first check whether the email is already in the database and if not post the data to the api and if successful, clear the form and navigate to the login page but if not successful, alert the user
    fetchFromAPI("api/suppliers")
      .then((res) => {
        if (res.find((user) => user.email === email)) {
          alert("Email already exists");
          return;
        }
        postToAPI("api/suppliers", data)
          .then((res) => {
            alert("Sign up successful");
            clearForm();
            navigate("/login");
          })
          .catch((err) => {
            alert("Sign up failed");
          });
      })
      .catch((err) => {
        alert("Sign up failed");
      });
  };

  return (
    <div className="sign-up">
      <section className="top-section"></section>

      <section className="container">
        <div className="sign-up-container">
          <div className="sign-up-card">
            <button className="btnCancel" onClick={handleCancel}>
              X
            </button>

            <h1 className="sign-up-title">Sign Up</h1>

            <form className="sign-up-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="input-label">Full Name</label>
                <input
                  className="input"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>

              <div className="input-container">
                <label className="input-label">Email</label>
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-container">
                <label className="input-label">Phone Number</label>
                <input
                  className="input"
                  type="text"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>

              <div className="input-container">
                <label className="input-label">Password</label>
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="input-container ">
                <label className="input-label">Confirm Password</label>
                <input
                  className="input"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
