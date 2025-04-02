import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Product from "./Components/Product.jsx";
import Review from "./Components/Review.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Product />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;