import Image from "next/image";
import Header from "./components/Header";
import Top from "./components/Top";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Top />
      <Header />
      <OurServices />
      <WhyChooseUs />
      <Products />
      <AboutUs />
    </div>
  );
}
