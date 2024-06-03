import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from '../pages/home';
import NotFound from '../pages/notfound';
import Success from '../pages/success';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/success' element={<Success />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App

