import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";
import ProductDetailPage from "../components/ProductDetailPage";

function page() {
  return (
    <div>
      <NavigationComponent />
      <div className="mt-[83px] md:mt-[86px]">
        <ProductDetailPage />
      </div>

      <Footer />
    </div>
  );
}

export default page;
