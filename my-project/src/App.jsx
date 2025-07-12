
import './App.css'
import Img from './Component/img/Img'
import Nabar from './Component/Router/Nabar'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './Component/Router/Home';
import About from './Component/Router/About';
import Blog from './Component/Router/Blog';
import Contact from './Component/Router/Contact';
function App() {

  return (
    <>
   <BrowserRouter>
   <Nabar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
       <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>


    </>
  )
}

export default App
