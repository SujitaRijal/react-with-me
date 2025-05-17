import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionHeading from "./components/Sections/SectionHeading/SectionHeading";
import NewArrival from "./components/Sections/NewArrival";
import Category from "./components/Sections/Categories/Category";
import content from "./data/content.json";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <SectionHeading />
      <NewArrival />

      {content.pages.shop.sections &&
        content.pages.shop.sections.map((item, index) => (
          <Category key={item.title + index} {...item} />
        ))}
      <Footer content={content.footer} />
    </>
  );
}

export default App;
