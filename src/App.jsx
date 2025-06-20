// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './App/Header';
import Header2 from './App/Header2';
import Navbar from './App/Navbar';
import Slider from './App/Slider';
import Course from './App/Course';
import AboutUS from './App/AboutUS';
import Admin from './App/Admin';
import Footer from './App/Footer';
import Registration from './App/Registration';
import ContactUS from './App/ContactUS';
import './App.css'
import SignIn from "./App/SignIn";
// Optional Home Page Component
const Home = () => (
  <>
    <Slider />
    <AboutUS />
    <Course />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Header2 />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/SignIN" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
