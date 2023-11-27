import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";

const SupplierDashBoard = () => {
  const navigate = useNavigate();
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState({});

  // fetch supplier data on load
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/suppliers/${supplierId}`)
      .then((res) => {
        setSupplier(res.data);
      })
      .catch((err) => console.log(err));
  }, [supplierId]);

  return (
    <div className="dashboard">
      <IconButton onClick={() => navigate("/")} sx={{ position: "fixed" }}>
        <Logout />
      </IconButton>
      <section className="top-section">
        <div className="top-section-container">
          <h1>{supplier.name}</h1>

          <Avatar alt={supplier.name} src={supplier?.image} />
        </div>
      </section>

      <section className="container">
        <div className="upload-container">
          <div className="upload-card">
            <h1>Upload new a product</h1>

            <form>
              <div className="input-container">
                <input type="text" placeholder="name" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Price" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="description" />
              </div>
              <div className="input-container">
                <input type="file" placeholder="Image" />
              </div>
             
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplierDashBoard;
