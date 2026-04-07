import Header from "./components/Header";
import Hero from './components/Hero';
import Branding from './components/Branding';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import BulletPoints from "./components/BulletPoints";
import Pricing from './components/Pricing';
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Testimonials from './components/Testimonials';
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Integrations from "./components/Integrations";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <Stats />              {/* 👈 NEW */}
      <BulletPoints />
      <Testimonials />      {/* 👈 NEW */}
      <Integrations />      {/* 👈 NEW */}
      <Pricing />
      <FAQ />               {/* 👈 NEW */}
      <Newsletter />         {/* 👈 NEW */}
      <Footer />
    </>

  );
}

export default App;
 