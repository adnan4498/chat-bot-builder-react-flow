import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Test from './Test';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  )
}

export default App