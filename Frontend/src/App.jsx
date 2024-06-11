import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Courses from './pages/Courses'
import SignUp from './components/SignUp'
import Contact from './pages/Contact'


const App = () => {
  return (
    <>

    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />



      </Routes>

      
    </>
  )
}

export default App
