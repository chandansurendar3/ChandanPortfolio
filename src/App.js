import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Rms from './Pages/ProjectPages/Rms';
import CustomerService from './Pages/ProjectPages/CustomerService';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rms" element={<Rms />} />
        <Route path='/Cust' element={<CustomerService />} />
      </Routes>
    </Router>
  );
};

export default App;
