import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Accomodation from "./Pages/headerpages/Accomodation.jsx"
import About from "./Pages/headerpages/About.jsx"
import Contact from "./Pages/headerpages/Contact.jsx"
import Nav from "./Pages/Nav.jsx"
import Home from "./Pages/Home.jsx"
import Activity from './Pages/headerpages/Activity.jsx'
import Blog from './Pages/headerpages/Blog.jsx'
import Retreat from './Pages/headerpages/Blog.jsx'
import Gallery from './Pages/headerpages/Gallery.jsx'


const Appbarcompo = () => {
  return (
    <>
     <BrowserRouter>
      <Nav/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/accomodations" element={<Accomodation/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/activity" element={<Activity/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/retreat" element={<Retreat/>}/>
       <Route path="/gallery" element={<Gallery/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default Appbarcompo
