import React from 'react';

const Order = (props) => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }
    const controls = {
        condensed_milk: 'condensed milk',
        milk_foam: 'milk foam',
        steamed_milk: 'Steamed Milk'
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{controls[ig.name] ? controls[ig.name] : ig.name} ({ig.amount})</span>;
    });
    return (
        <div className="col-md-12 mt-4">
            <div className="card">
                <div className="card-header">Price: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></div>
                <div className="card-body">
                    <div className="list-group">
                        <p>Ingredients: {ingredientOutput}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
