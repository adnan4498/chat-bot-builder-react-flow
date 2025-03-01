import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App