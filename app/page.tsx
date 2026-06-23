import Header from "./components/Header";
import Top from "./components/Top";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Top />
      <div className="flex flex-col gap-24 md:gap-40">
        <Header />
        <OurServices />
        <WhyChooseUs />
        <Products />
        <AboutUs />
        <Banners />
        <Footer />
      </div>
    </div>
  );
}
