import logo from './logo.svg';
import './App.css';
import Features from './components/landingpage/Features';
import HeroSection from './components/landingpage/HeroSection';
import ItemsSection from "./components/landingpage/ItemsSection";
import CollectionsSection from "./components/landingpage/CollectionsSection";
import PopularLocalities from "./components/landingpage/PopularLocalities";
import GetTheApp from "./components/landingpage/GetTheApp";
import Footer from "./components/landingpage/Footer";
import ServingSections from './components/landingpage/ServingSections';
import HowItWorks from './components/landingpage/HowItWorks';
import FAQ from './components/landingpage/FAQ';
import AddedValues from './components/landingpage/AddedValues';
function App() {
  return (
    <div>
      
      <HeroSection />
      <ServingSections/>
      <HowItWorks/>
      <AddedValues/>
      {/* <CollectionsSection />
      <GetTheApp /> */}
      <FAQ/>
    </div>
  );
}

export default App;
