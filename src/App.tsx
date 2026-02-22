import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import Hardscapes from './pages/Hardscapes';
import LawnCare from './pages/LawnCare';
import PlantingAndMulch from './pages/PlantingAndMulch';
import PropertyRepairs from './pages/PropertyRepairs';
import SnowRemoval from './pages/SnowRemoval';
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/services/landscaping-hardscapes"
            element={<Hardscapes />}
          />
          <Route path="/services/lawn-care" element={<LawnCare />} />
          <Route
            path="/services/property-maintenance"
            element={<PropertyRepairs />}
          />
          <Route
            path="/services/mulch-flower-beds"
            element={<PlantingAndMulch />}
          />
          <Route path="/services/snow-removal" element={<SnowRemoval />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

