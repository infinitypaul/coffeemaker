import React, {Component} from 'react';

class CoffeeOrderSummary extends Component {
    render() {
        const controls = {
            condensed_milk: 'condensed milk',
            milk_foam: 'milk foam',
            steamed_milk: 'Steamed Milk'
        }
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{ textTransform: 'capitalize'}}>{controls[igKey] ? controls[igKey] : igKey}</span> : {this.props.ingredients[igKey]}
                </li>);
            });
        return (
            <>
                <ul>
                    {ingredientSummary}
                </ul>
                <hr />
                <p className="lead text-center"><strong>Total Price: {this.props.price}</strong></p>
            </>
        );
    }
}


export default CoffeeOrderSummary;
