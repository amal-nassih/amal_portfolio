import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {AppWrap} from '../../wrapper';
import { ModeSwitcher } from '../../components';

const Header = () => {

  return (
    <div id='home' className='app__header app__flex'>
       <div className='app__mode-switcher'>
          <div className='app__mode-switcher-logo' Style={{ zIndex:'1000' }}>
                 <ModeSwitcher />      
          </div>   
        </div>
      <div className="app__download">
          <motion.div
            whileInView={{ opacity:[0,1] }}
            transition={{ duration:0.5, delayChildren:0.5 }}
            className='app__header-img'
          >
  
                <img src={images.profile3} alt='profile' />
                <h className="hello"><span>Hel</span>lo <span>Wor</span>ld!!</h>
                <motion.img  
                  whileInView={{ scale:[0,1] }}
                  transition={{ duration:1, ease:'easeInOut' }}
                  src={images.circle}
                  alt='profile_circle'
                  className='overlay_circle'
                />
              
          </motion.div>

            <button type='button'>
              Download cv
            </button>

          </div>

          <motion.div
             whileInView={{ x:[-100,0], opacity:[0,1] }}
             transition={{ duration:0.5 }}
             className='app__header-inf'  
          >
              <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>

                      
                      <div style={{ marginRight:15 }}>
                         
                           <p className='p-text'> <span>👋</span> Hi,I'm </p>
                           <h1 className='head-text' >Amal</h1>
                      </div>
                      </div>
                    
                    <div className='tag-cmp app__flex'>
                       <p className='p-text'>A Software engineer ,</p>
                       <p className='p-text'> Machine learning enthusiast</p>
                    </div>

                    
              </div>
          </motion.div>

          <motion.div
            whileInView={{ scale:[0,1], opacity:[0,1] }}
            transition={{ duration:1, ease:'easeInOut' }}
            className='app__header-circles'  
          >

            {[images.react, images.laravel, images.spring].map((circle,index)=>(
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <img src={circle} alt="{circle}" />
              </div>
            ))}

          </motion.div>
    </div>
  )
}

export default AppWrap(Header,'home');