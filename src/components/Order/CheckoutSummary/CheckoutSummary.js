import React from 'react';
import Coffee from "../../Coffee/Coffee";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
    return (
        <div>
                <Coffee ingredients={props.ingredients} />

                <hr/>
                <div className="text-center">
                    <span className="float-left">
                        <Button
                            btnType="btn-danger"
                            clicked={props.checkoutCancelled}>Cancel</Button>
                    </span>
                    <span className="float-right">
                        <Button btnType="btn-primary"
                                clicked={props.checkoutContinue} >Continue</Button>
                    </span>
                </div>
        </div>
    );
};

export default CheckoutSummary;
