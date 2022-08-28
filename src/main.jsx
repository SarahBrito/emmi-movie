import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/home-movies'
import Details from './pages/info-movie'
import Search from './pages/search-movie'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:id' element={<Details />}/>
      <Route path='/search/:search' element={<Search />}/>
    </Routes>
  </BrowserRouter>
)
