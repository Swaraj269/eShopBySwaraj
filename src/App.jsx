import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Carddetails from './components/Carddetails'
import Create from './components/Create'

function App() {
  return (
    <>
        <main className='h-screen w-screen flex overflow-hidden'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Carddetails />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>

    </>
  )
}

export default App