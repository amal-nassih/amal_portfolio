import React from 'react';


const NavigationDotes = (active) => {
  return (
    <div className='app__navigation'>
         {['home', 'about','work','skills','testimonial','contact'].map((item,index)=>(
         
                <a href={`#${item}`}
                   key={item+index}
                   className='app__navigation-dot'
                   style={active==item?{backgroundColor:'#E69A8DFF'}:{}}
                />
 
           ))}
    </div>
  )
}

export default NavigationDotes