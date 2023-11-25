import React from 'react';
import { useNavigate, Router, Routes, Route } from 'react-router-dom';

const Home = () =>{
  const navigate = useNavigate();

  return(
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  )
}

export default Home;
