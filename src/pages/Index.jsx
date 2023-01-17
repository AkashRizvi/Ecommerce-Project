import React from 'react';
import '../bootstrap.min.css'
import Navbar from '../components/Navbar'
import Header from '../components/header/Header.jsx';
import Home from '../components/mainpage/Home';
import Page from './Page';
import Head from '../components/header/Head';
import SliderTop from '../components/SliderTop';
import MultipleItems from '../components/ProductSlider';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';


function Index() {
  return (
    <div className='container-fluid'>
    <Head />
    <Navbar/> 
    <SliderTop />
    <MultipleItems />

    {/* <Header/> */}
    {/* <Page />     */}


<HomeScreen />
<ProductScreen />
    <Footer />
    <Footer1 />
    </div>
  )
}




export default Index
