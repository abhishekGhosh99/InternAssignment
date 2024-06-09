import React from "react";
import {
  Navbar,
  HeroBanner,
  Features,
  Testimonial,
  FAQ,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Features />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
