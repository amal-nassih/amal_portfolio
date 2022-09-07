import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

import ModeContext from '../context/ModeContext';

const ModeSwitcher = () => {
    const [isDark, setIsDark]= ModeContext();
  return (
    <button type='button' onClick={()=>setIsDark(!isDark)}>
        {isDark ? (
            <BsSun color='#fff' size="25" />
        ):(
            <BsMoon size="25"/>
        )}
    </button>
  )
}

export default ModeSwitcher