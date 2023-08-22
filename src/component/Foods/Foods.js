import React, { useEffect, useState } from 'react';
import './Foods.css'
import { addToDb } from '../../utilities/fakedb';
// import { addToDb } from '../../utilities/fakedb';
import Food from '../Food/Food';
import Cart from '../Cart/Cart';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])

    const clickButton = (food) =>{
        const newCart = [...cart, food];
        setCart(newCart);
    }
    
    return (
        <div className='food'>
            <div className='food-container'>
                {
                    foods.map(food => <Food food = {food} key = {food.idMeal} clickButton={clickButton}></Food>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Foods;