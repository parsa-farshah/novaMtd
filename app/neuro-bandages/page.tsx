import React from "react";
import NeuroHero from "../components/NeuroHero";
import WhyNeuroBandage from "../components/WhyNeuroBandage";
import NeuroBenefits from "../components/NeuroBenefits";
import NeuroProducts from "../components/NeuroProducts";
import NeuroCTA from "../components/NeuroCTA";
import NavigationComponent from "../components/NavigationComponent";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <NavigationComponent />
      <div className="mt-[83px] md:mt-[86px]">
        <NeuroHero />
        <WhyNeuroBandage />
        <NeuroBenefits />
        <NeuroProducts />
        <NeuroCTA />
      </div>
      <Footer />
    </div>
  );
}

export default page;
