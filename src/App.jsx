import About from './Pages/About'
import LandingPage from './Pages/LandingPage'
import Membership from './Pages/Membership'
import Programs from './Pages/Programs'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/membership" element={<Membership />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
