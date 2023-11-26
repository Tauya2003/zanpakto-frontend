import { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suppliers, setSuppliers] = useState(null);
  const [supplierId, setSupplierId] = useState([]);

  // get all suppliers on load
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/suppliers")
      .then((res) => {
        setSuppliers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const checkUser = () => {
    // loop through the suppliers
    for (let i = 0; i < suppliers.length; i++) {
      // check if the email and password match
      if (suppliers[i].email === email && suppliers[i].password === password) {
        // if they match, get the id of the supplier
        setSupplierId(suppliers[i].id);
        alert("Login successful");
        return navigate(`/dashboard/${suppliers[i]._id}`);
      }
    }

    return alert("Invalid email or password");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
  };

  return (
    <div className="login">
      <section className="top-section"></section>

      <section className="container">
        <div className="login-container">
          <div className="login-card">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-container">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
