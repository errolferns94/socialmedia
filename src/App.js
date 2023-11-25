import React from 'react';
import Register from './Register';
import { useNavigate, Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}



export default App;
