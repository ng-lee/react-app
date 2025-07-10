import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '@/pages/main'
import AboutPage from '@/pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
