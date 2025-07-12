
import './App.css'
import Img from './Component/img/Img'
import Nabar from './Component/Router/Nabar'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './Component/Router/Home';
import About from './Component/Router/About';
import Blog from './Component/Router/Blog';
import Contact from './Component/Router/Contact';
import Error from './Component/Router-error/Error';
function App() {

  return (
    <>
   <BrowserRouter>
  
    <Routes>
      <Route path='' element={<Nabar/>}>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
   </BrowserRouter>


    </>
  )
}

export default App
