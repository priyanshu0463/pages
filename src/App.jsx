import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import MissionVision from './components/MissionVision';
import CoverageMap from './components/CoverageMap';
import Contact from './components/Contact';
import MapEmbed from './components/MapEmbed';
import Footer from './components/Footer';
import RouteConnector from './components/RouteConnector';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <Hero /> {/* Navy background */}
      
      {/* Route connector after hero */}
      <div className="bg-gray-50 py-8 flex justify-center">
        <RouteConnector />
      </div>
      
      <About /> {/* Surface background (gray-50) - already applied */}
      <WhyUs /> {/* Navy background - already applied */}
      
      {/* Route connector after Why Us */}
      <div className="bg-gray-50 py-8 flex justify-center">
        <RouteConnector />
      </div>
      
      <MissionVision /> {/* Surface background (gray-50) - already applied */}
      <CoverageMap /> {/* White background - already applied */}
      <Contact /> {/* White background - already applied */}
      <MapEmbed /> {/* Surface background (gray-50) - already applied */}
      
      {/* Route connector before footer */}
      <div className="bg-white py-8 flex justify-center">
        <RouteConnector />
      </div>
      
      <Footer /> {/* Navy background - already applied */}
    </div>
  );
}

export default App;
