import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import StudentLayout from './layout/StudentLayout'

import Home from './pages/students/Home.jsx'
import './App.css'

function App() {

  return (
    <>
   <div>
   <Router>
      <Routes>


        <Route path="/" element={<Login />} />
        
      {/* Student   Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<Home />} />
        </Route>



      </Routes>
    </Router>
   </div>
    </>
  )
}

export default App
