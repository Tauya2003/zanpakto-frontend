import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import SearchFeed from "./pages/SearchFeed";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SupplierDashBoard from "./pages/SupplierDashboard";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/product-details/:productId" element={<Product />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/dashboard/:supplierId" element={<SupplierDashBoard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
