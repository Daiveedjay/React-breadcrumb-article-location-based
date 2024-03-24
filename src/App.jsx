import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./About";
import FAQ from "./FAQ";
import Home from "./Home";
import Homepage from "./Homepage";
import Products from "./Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
