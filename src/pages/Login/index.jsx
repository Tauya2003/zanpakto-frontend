import { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suppliers, setSuppliers] = useState(null);
  const [supplierId, setSupplierId] = useState([]);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);

  // get all suppliers on load
  useEffect(() => {
    const getData = async () => {
      const data = await fetchFromAPI("api/suppliers");
      setSuppliers(data);
    };
    getData();
  }, []);

  const checkUser = () => {
    // loop through the suppliers
    for (let i = 0; i < suppliers.length; i++) {
      // check if the email and password match
      if (suppliers[i].email === email && suppliers[i].password === password) {
        // if they match, get the id of the supplier
        setSupplierId(suppliers[i].id);
        setSuccessOpen(true);

        // delay for 1 second then naviagte to the dashboard

        return setTimeout(() => {
          navigate(`/dashboard/${suppliers[i]._id}`);
        }, 3000);
      }
    }

    return setFailureOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessOpen(false);
    setFailureOpen(false);
  };

  return (
    <div className="login">
      <section className="top-section"></section>

      <section className="container">
        <div className="login-container">
          <div className="login-card">
            <IconButton
              onClick={() => navigate("/")}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                transition: "all 0.3s ease",
                ":hover": { color: "#ff0000", bgcolor: "transparent" },
              }}
            >
              <Close />
            </IconButton>
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

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Login successful!
        </Alert>
      </Snackbar>

      <Snackbar
        open={failureOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Login failed!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
