import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {AppWrap,MotionWrapper} from '../../wrapper';
import { urlFor, client } from '../../client';

import './About.scss';


// const abouts = [
//   {title:'web Dev', description:'i am a good developper',imgUrl:images.about01},
//   {title:'web Dev', description:'i am a good developper',imgUrl:images.about02},
//   {title:'web Dev', description:'i am a good developper',imgUrl:images.about03},
//   {title:'web Dev', description:'i am a good developper',imgUrl:images.about04},

// ]
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
      
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
       <h2 className='head-text'>
       “If You Think Math is Hard Try <span className='span1'>Web Design</span>.” - <span>Pixxelznet</span>
       </h2>

       <div className='app__profiles'>
           {abouts.map((about,index)=>(
            <motion.div
              whileInView={{ opacity:1 }}
              whileHover={{ scale:1.1 }}
              transition={{ duration:0.5, type:'tween' }
            }className='app__profile-item'
            key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop:20 }}>
                {about.title}
              </h2>

              <p className='p-text' style={{ marginTop:10 }}>
                {about.description}
              </p>
            </motion.div>
           ))}
       </div>
    </>
  )
} 

export default AppWrap(About,'about');