import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, CircularProgress, IconButton } from "@mui/material";
import { Close, Logout } from "@mui/icons-material";
import productPlaceholder from "../../assets/images/product-placeholder.jpg";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { postToAPI } from "../../utils/postToAPI";

const SupplierDashBoard = () => {
  const navigate = useNavigate();
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState({});
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch supplier data on load
  useEffect(() => {
    const fetchSupplier = async () => {
      const response = await fetchFromAPI(`api/suppliers/${supplierId}`);
      setSupplier(response);

      setLoading(false);
    };
    fetchSupplier();
  }, [supplierId]);

  // function to clear the form
  const clearForm = () => {
    setImage("");
    setName("");
    setPrice("");
    setDescription("");
  };

  // function to check if all fields are filled and if they are return true
  const checkForm = () => {
    if (image && name && price && description) {
      return true;
    }
    alert("Please fill all fields");
    return false;
  };

  // function to convert image to base64
  const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  // function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkForm()) return;

    const data = {
      name: name,
      price: price,
      supplier: supplierId,
      description: description,
      image: image,
    };

    postToAPI("api/products", data)
      .then((res) => {
        alert(res);
        alert("Product uploaded successfully");
        clearForm();
      })
      .catch((err) => {
        alert("An error occured");
      });
  };

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#000" }} />
      </Box>
    );
    
    if (!supplier?.name)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Something went wrong. Please try again later.
      </Box>
    );

  return (
    <div className="dashboard">
      <section className="top-section">
        <div className="top-section-container">
          <h1>{supplier.name}</h1>

          <Avatar alt={supplier.name} src={supplier?.image} />
        </div>
      </section>

      <section className="container">
        <div className="upload-container">
          <div className="upload-card">
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
            <h1>Upload new a product</h1>

            <form className="upload-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="input-label">Product Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="input-label">Product Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="input-label">Product Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="input-label">Product Image</label>
                <input
                  accept="image/*"
                  type="file"
                  onChange={convertToBase64}
                />
                <div className="img-container">
                  <img
                    src={image ? image : productPlaceholder}
                    alt={name ? name : "product-image"}
                  />
                </div>
              </div>

              <button type="submit">Upload</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplierDashBoard;
