import React from 'react'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Home';
import CropCard from './components/CropCard';
import ToolCard from './components/ToolCard';
import ContactForm from './components/ContactForm';
export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/toolcart' element={<ToolCard/>}/>
      <Route path='/cropcart' element={<CropCard/>}/>
      <Route path='/contactform' element={<ContactForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}