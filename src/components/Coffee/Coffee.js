import React from 'react';
import CoffeeIngredient from './CoffeeIngredient/CoffeeIngredient'

const coffee = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <CoffeeIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    let classes = 'card-columns'
    if (transformedIngredients.length === 0) {
        classes = 'text-center'
        transformedIngredients = (
            <>
            <p className="lead">Please Add Your Coffee Ingredient</p>
            <img alt="coffee" src="https://media.giphy.com/media/KT2wdPEnRoGxG/source.gif" />
            </>
     )
    }
    return (
        <div className={classes} >
            {transformedIngredients}
        </div>
    );
};

export default coffee;
