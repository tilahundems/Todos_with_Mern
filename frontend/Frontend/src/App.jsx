import { useState } from 'react'
import './app.css'
import Home from './Components/HomeCompomnents/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {

  
  return (
    <>
    
     <h5 className='text-center mt-5'> Todo Lists </h5>
     <Home />
    </>
  )
}

export default App
