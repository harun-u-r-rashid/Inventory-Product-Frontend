import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import apiInstance from './utils/axios';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Logout from './views/auth/Logout';
import Index from './views/base/Index';
import Details from './views/base/Details';
import Create from './views/base/Create';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/logout/" element={<Logout />} />

          <Route path="/" element={<Index />} />
          <Route path="/details/:id/" element={<Details />} />
          <Route path="/create/" element={<Create />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
