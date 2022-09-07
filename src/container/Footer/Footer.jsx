import React,{useState} from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import {AppWrap} from '../../wrapper';
import { images } from '../../constants';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name,email,message} = formData;

  const handleChangeInput=(e)=>{
    const {name,value} = e.target;

    setFormData({...formData,[name]:value});
  }

  const handleSubmit = ()=>{
    setLoading(true);
    const contact = {
      _type:'contact',
      name:name,
      email:email,
      message:message
    }

    client.create(contact)
           .then(()=>{
            setLoading(false);
            setIsFormSubmited(true);
           })
  }
  return (
    <>
        <h2 className='head-text'> Take a Coffee <span>&</span> Chat with me</h2>
        <div className='app__footer-cards'>
            <div className='app__footer-card'>
                 <img src={images.email} alt="email" />
                 <a href="mailto:amalnassih2001@gmail.com">amalnassih2001@gmail.com</a>
            </div>

            <div className='app__footer-card'>
                 <img src={images.mobile} alt="mobile" />
                 <a href="tel:+(212)0704910522">0704910522</a>
            </div>
        </div>

        <div className='app__footer-form app__flex'>
            {isFormSubmited? <div className='form_submited heade-text'>Thank you for getting in touch!</div>:''}
          <div className='app__flex'>
             <input type='text' name='name' value={name} placeholder='Your Name' onChange={handleChangeInput}/>
          </div>

          <div className='app__flex'>
             <input type='email' name='email' value={email} placeholder='Your email' onChange={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <textarea className='p-text' placeholder='Your Message' name='message' value={message}></textarea> 
          </div>

           <button type="button" className='p-text' onClick={handleSubmit}>
            {loading?'Sending':'Send Message'}
           </button>

        </div>
    </>
  )
}

export default AppWrap(Footer,'footer');