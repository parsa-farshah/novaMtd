import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";
import ProductDetailPage from "../components/ProductDetailPage";

function page() {
  return (
    <div>
      <NavigationComponent />
      <ProductDetailPage />
      <Footer />
    </div>
  );
}

export default page;
