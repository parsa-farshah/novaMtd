import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";

function page() {
  return (
    <div>
      <NavigationComponent />
      <BlogDetail />
      <Footer />
    </div>
  );
}

export default page;
