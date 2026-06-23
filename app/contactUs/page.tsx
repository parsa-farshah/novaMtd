import React from "react";
import ContactUsPage from "../components/ContactUsPage";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <NavigationComponent />
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default page;
