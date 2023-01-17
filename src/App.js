import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Page404 />} />
        <Route exact path='/' element={<HomeScreen />} />
        <Route path='/ProductScreen/:id' element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
