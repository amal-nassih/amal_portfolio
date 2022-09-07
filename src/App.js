import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {ModeSwitcher} from './components';
import { About, Footer,Header, Skills, Work,Testimonial } from './container';
import './App.scss';  

const App = () => {
  return ( 
    <div className='app'>
        <div className='app__mode-switcher'>
          <div className='app__mode-switcher-logo' Style={{ zIndex:'1000' }}>
                 <ModeSwitcher />      
          </div>   
        </div>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills/>
        <Footer />
    </div>
  )
}
 
export default App 