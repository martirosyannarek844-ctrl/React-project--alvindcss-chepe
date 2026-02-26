
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Corona from './components/corona/corona'
import Home from './components/home/home'
import Register from './components/reg/reg'

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutPage' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Corona' element={<Corona />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default App
