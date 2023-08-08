import React, { useState } from 'react';
import './burgerStyling.css';

export default function Burger(){
    const [lettuce, setLettuce] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);

    const handleIngredients = (action, ingredient) => {
        switch(ingredient){
            case 'lettuce':{
                setLettuce(prevValue => (action==='add'? prevValue + 1: Math.max(prevValue - 1, 0)));
                break;
            }
            case 'bacon':{
                setBacon(prevValue => (action==='add'? prevValue + 1: Math.max(prevValue - 1, 0)));
                break;
            }
            case 'cheese':{
                setCheese(prevValue => (action==='add'? prevValue + 1: Math.max(prevValue - 1, 0)));
                break;
            }
            case 'meat':{
                setMeat(prevValue => (action==='add'? prevValue + 1: Math.max(prevValue - 1, 0)));
                break;
            }
        }
    };

    const makeBurger = () => {
        let  burger = [];

        for(let i=0; i<lettuce; i++){
            burger.push(<div key={burger.length} className='lettuceSlice'></div>)
        }

        for(let i=0; i<bacon; i++){
            burger.push(<div key={burger.length} className='baconSlice'></div>)
        }

        for(let i=0; i<cheese; i++){
            burger.push(<div key={burger.length} className='cheeseSlice'></div>)
        }

        for(let i=0; i<meat; i++){
            burger.push(<div key={burger.length} className='meatSlice'></div>)
        }

        if (burger.length === 0) {
            burger.push(<p key="0">Please start adding ingredients!</p>);
          }
      
          return burger;
    };

    return(
        <div className='container'>
         <div className="burgerIngredients">
        <div className="burgerTop"></div>
        {makeBurger()}
        <div className="burgerBottom"></div>
      </div>
      <div className='ingredientsButtons'>
      <p>Current Price:</p>
        <div className='sub-div'>
            <div className='ingrLabel'>Lettuce:</div>
            <button className='lessbtn' onClick = {() => handleIngredients('remove','lettuce')}>Less</button>
            <button className='morebtn'onClick = {() => handleIngredients('add','lettuce')}>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Bacon:</div>
            <button className='lessbtn' onClick = {() => handleIngredients('remove','bacon')}>Less</button>
            <button className='morebtn' onClick = {() => handleIngredients('add','bacon')}>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Cheese:</div>
            <button className='lessbtn' onClick = {() => handleIngredients('remove','cheese')}>Less</button>
            <button className='morebtn' onClick = {() => handleIngredients('add','cheese')}>More</button>
        </div>
        <div className='sub-div'>
            <div className='ingrLabel'>Meat:</div>
            <button className='lessbtn' onClick = {() => handleIngredients('remove','meat')}>Less</button>
            <button className='morebtn' onClick = {() => handleIngredients('add','meat')}>More</button>
        </div>
      </div>
        </div>
    )
}