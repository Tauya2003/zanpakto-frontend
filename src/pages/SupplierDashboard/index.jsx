import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SupplierDashBoard = () => {
  const { supplierId } = useParams();
  const [supplier, setSupplier] = useState({});

  // fetch supplier data on load
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/suppliers/${supplierId}`)
      .then((res) => {
        console.log(res.data);
        setSupplier(res.data);
      })
      .catch((err) => console.log(err));
  }, [supplierId]);

  return (
    <div className="dashboard">
      <section className="top-section">
        <div className="top-section-container">
          <h1>{supplier.name}</h1>
          <button >Logout</button>
        </div>
      </section>

      <section className="container">
        <div className="left-section">
          <div className="left-section-container">
            <h2>Products</h2>
            <ul>
              {supplier.products &&
                supplier.products.map((product) => (
                  <li key={product._id} className="card">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.image}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="right-section">
          <div className="right-section-container">
            <h2>Orders</h2>
            <ul>
              {supplier.orders &&
                supplier.orders.map((order) => (
                  <li key={order._id}>
                    <h3>{order.name}</h3>
                    <p>{order.description}</p>
                    <p>{order.price}</p>
                    <p>{order.quantity}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplierDashBoard;
