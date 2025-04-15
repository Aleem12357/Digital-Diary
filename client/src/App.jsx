import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import './App.css'

function App() {

  return (
    <>
   <div>
   <Router>
      <Routes>


        <Route path="/" element={<Login />} />


        <Route path="/student" element={<Login />}>
          {/* <Route path="dashboard" element={<Home />} />
          <Route path="idea-selection" element={<IdeaSelection />} />
          <Route path="group-formation" element={<GroupFormation />} />
          <Route path="advisor" element={<AdvisorSelection />} />
          <Route path="profile" element={<StudentProfilePage />} /> */}

        </Route>
      </Routes>
    </Router>
   </div>
    </>
  )
}

export default App
