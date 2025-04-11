import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Make sure this import exists
import Home from './pages/Home';
import Compare from './pages/Compare';
import MobileDetails from './pages/MobileDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/mobile/:id" element={<MobileDetails />} />
      </Routes>
      <Footer /> {/* This should be present */}
    </Router>
  );
};

export default App;