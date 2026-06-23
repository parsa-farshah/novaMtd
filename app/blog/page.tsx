import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

function page() {
  return (
    <div>
      <NavigationComponent />
      <Blog />
      <Footer />
    </div>
  );
}

export default page;
