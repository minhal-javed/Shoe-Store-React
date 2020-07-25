import React from 'react';
import './Details.css'

export const Colors= (props)=>{

    const { colors } = props;
    

return(
    <div className='colors'>
    {
        colors.map((color, index) => (
            <button key={index} style={{ background: color }} ></button>
        ))
    }
    </div>
)}