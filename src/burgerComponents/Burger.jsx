import React, { useState } from 'react';
import './burgerStyling.css';

export default function Burger(){

    return(
        <div className='container'>
         <div className="burgerIngredients">
        <div className="burgerTop"></div>
        <div className="burgerBottom"></div>
      </div>
      <div className='ingredientsButtons'>
      <p>Current Price:</p>
        <div className='sub-div'>
            <div className='ingrLabel'>Lettuce:</div>
            <button className='lessbtn'>Less</button>
            <button className='morebtn'>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Bacon:</div>
            <button className='lessbtn'>Less</button>
            <button className='morebtn'>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Cheese:</div>
            <button className='lessbtn'>Less</button>
            <button className='morebtn'>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Meat:</div>
            <button className='lessbtn'>Less</button>
            <button className='morebtn'>More</button>
        </div>
      </div>
        </div>
    )
}