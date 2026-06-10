import Image from "next/image";
import Header from "./components/Header";
import Top from "./components/Top";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Banners from "./components/Banners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Top />
      <Header />
      <OurServices />
      <WhyChooseUs />
      <Products />
      <AboutUs />
      <Banners />
      <Footer />
    </div>
  );
}
