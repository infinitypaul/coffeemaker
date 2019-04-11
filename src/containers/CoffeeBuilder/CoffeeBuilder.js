import React, {Component} from 'react';
import { connect } from 'react-redux';

import Modal from "../../components/UI/Modal/Modal";
import axios from '../../axios-orders';

import * as actions from '../../store/actions/index'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import Coffee from "../../components/Coffee/Coffee";
import BuildControls from "../../components/Coffee/BuildControl/BuildControls";
import CoffeeOrderSummary from "../../components/Coffee/CoffeeOrderSummary/CoffeeOrderSummary";

class CoffeeBuilder extends Component {
    state={
        Purchasing: false,
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }


    PurchaseCancelHandler=()=>{
        this.setState({
            Purchasing: false
        })
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el)=>{
                return sum + el
            }, 0);
        return  sum > 0;
    }


    PurchaseHandler =() => {
        if (this.props.isAuthenticated) {
            this.setState( { Purchasing: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
    PurchaseContinueHandler=()=>{
        this.props.onInitPurchase()
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let coffee = this.props.error ? <p>Ingredients Cant Be Loaded</p> : <Spinner/>
        let controls =  null;
        let orderSummary = null;
        if(this.props.ings){
            coffee = <Coffee ingredients={this.props.ings} />
            controls = (
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.price}
                    Purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.PurchaseHandler}
                    isAuth={this.props.isAuthenticated}
                />
            )
            orderSummary = <CoffeeOrderSummary
                ingredients={this.props.ings}
                price={this.props.price.toFixed(2)}
            />;
        }
        return (
            <>
                <Modal
                    title="Your Order"
                    show={this.state.Purchasing}
                    modalClosed={this.PurchaseCancelHandler}
                    modalContinued = {this.PurchaseContinueHandler}
                >
                    {orderSummary}
                </Modal>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {coffee}
                        </div>
                        <div className="col-md-4">
                            {controls}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.coffeeMaker.ingredients,
        price: state.coffeeMaker.totalPrice,
        error: state.coffeeMaker.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CoffeeBuilder, axios));