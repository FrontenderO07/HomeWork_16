import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import MyCart from "./pages/MyCart";
import MyOrder from "./pages/MyOrder";
import Deatils from "./pages/detail/Details";
import HomePage from "./pages/HomePage";

const products = [
  {
    id: 1,
    title: "Nike Air Max 270 GO",
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c96ea9f-ca01-4697-bfd3-187ab4432c93/air-max-270-go-big-kids-easy-on-off-shoes-GDD3R0.png",
    price: "$135",
  },
  {
    id: 2,
    title: "Nike Air Max Pulse",
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png",
    price: "$200",
  },
  {
    id: 3,
    title: "Nike Air Max 90",
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baa2520d-49da-4a27-ab2c-7fb133fb3008/air-max-90-mens-shoes-6n3vKB.png",
    price: "$230",
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products products={products} />} />

          <Route
            path="products/:id/details"
            element={<Deatils products={products} />}
          />

          <Route path="/myCart" element={<MyCart />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
