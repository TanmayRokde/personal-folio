import { useState } from 'react'
import './App.css'
import Navbar from './helper/Navbar'
import Roller from './sections/Roller'
import Footer from './sections/Footer'
import LandingPage from './pages/LandingPage'
import { Navigate, Route, Routes } from 'react-router'
import Projects from "../src/sections/projects"
import Contact from "../src/sections/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Roller />
      <Footer />
    </>
  );
}
export default App;
