import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductSlider from "./components/ProductSlider";
import AboutUs from "./components/AboutUs";
import CategorySection from "./components/CategorySection";
import ReviewsMarquee from "./components/ReviewsMarquee";
import AtYourService from "./components/AtYourService";
import CategoryPage from "./pages/CategoryPage";
import "./App.css";
import CategoryProducts from "./pages/CategoryProducts";
import CustomizationPage from "./pages/CustomizationPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProductSlider />
              <AboutUs />
              <CategorySection />
              <AtYourService />
              <ReviewsMarquee />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Products / Categories Page */}
        <Route path="/products/:slug" element={<CategoryProducts />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/products/:slug" element={<CategoryProducts />} />
        <Route path="/customizations" element={<CustomizationPage />} />

      </Routes>
    </>
  );
}

export default App;
