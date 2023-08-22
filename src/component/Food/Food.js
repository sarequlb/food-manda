import React from 'react';
import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    // console.log(props)
    const {clickButton,food} = props;
    const {idMeal,strMeal,strMealThumb,strCategory,strArea} = props.food;
    return (
        <div className='single-food'>
             <img src={strMealThumb} alt="" />
             <p className='food-name'>{strMeal}</p>
             <p className='category'>Category: {strCategory}</p>
             <p>Area: {strArea}</p>
             <button onClick={()=> clickButton(food)} className='add-to-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
             </button>
        </div>
    );
};

export default Food;