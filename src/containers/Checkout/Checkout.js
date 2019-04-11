import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactInfo from "./ContactInfo/ContactInfo";

class Checkout extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-info')
    }
    render() {
        let summary = <Redirect to="/" />
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Checkout</div>
                                <div className="card-body">
                            {purchasedRedirect}
                            <CheckoutSummary
                                checkoutCancelled={this.checkoutCancelledHandler}
                                checkoutContinue={this.checkoutContinueHandler}
                                ingredients={this.props.ings}/>
                                </div>
                            </div>
                                <Route
                                    path={this.props.match.path + '/contact-info'}
                                    component={ContactInfo} />
                        </div>
                    </div>
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.coffeeMaker.ingredients,
        purchased: state.orders.purchased
    }
};

export default connect(mapStateToProps)(Checkout);