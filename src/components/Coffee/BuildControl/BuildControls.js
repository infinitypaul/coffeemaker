import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label:'Chocolate', type: 'chocolate'},
    {label:'Condensed Milk', type: 'condensed_milk'},
    {label:'Espresso', type: 'espresso'},
    {label:'Milk Foam', type: 'milk_foam'},
    {label:'Steamed Milk', type: 'steamed_milk'}
]

const buildControls = props => {
    return (
        <div>
            <p className="lead text-center">Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
            <hr className={classes.Seven} />
            {controls.map( ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded( ctrl.type )}
                    removed={() => props.ingredientRemoved( ctrl.type )}
                    disabled={props.disabled[ctrl.type]} />
            ) )}
            <div className="text-center">
            <button
                disabled={!props.Purchasable}
                className="btn btn-primary btn-lg"
                onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
            </div>
        </div>
    );
};


export default buildControls;
