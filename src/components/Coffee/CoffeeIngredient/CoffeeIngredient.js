import React, {Component} from 'react';
import propTypes from 'prop-types';

class CoffeeIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('chocolate'):
                ingredient = (
                    <>
                        <div className="card mb-3">
                            <img className="card-img"
                                 src="https://media.giphy.com/media/xT1R9yvXiMMXE4t3Zm/giphy.gif"
                                 alt="Chocolate" />
                                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h4 className="card-title">Chocolate</h4>
                                </div>
                        </div>
                    </>
                );
                break;
            case ('condensed_milk'):
                ingredient = (
                    <>
                        <div className="card mb-3">
                            <img className="card-img"
                                 src="https://media.giphy.com/media/OGcj5IFtW5PO0/giphy.gif"
                                 alt="Condensed Milk" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Condensed Milk</h4>
                            </div>
                        </div>
                    </>
                );
                break;
            case ('espresso'):
                ingredient = (
                    <>
                        <div className="card mb-3">
                            <img className="card-img"
                                 src="https://media.giphy.com/media/qHiAZDAVMuFRm/giphy.gif"
                                 alt="Espresso" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Espresso</h4>
                            </div>
                        </div>
                    </>
                );
                break;
            case ('milk_foam'):
                ingredient = (
                    <>
                        <div className="card mb-3">
                            <img className="card-img"
                                 src="https://media.giphy.com/media/2NZEyFVHIDjEs/giphy.gif"
                                 alt="Milk Foam" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Milk Foam</h4>
                            </div>
                        </div>
                    </>
                );
                break;
            case ('steamed_milk'):
                ingredient = (
                    <>
                        <div className="card mb-3">
                            <img className="card-img"
                                 src="https://media.giphy.com/media/OB7S9QMlfnLji/giphy.gif"
                                 alt="Steamed Milk" />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                                <h4 className="card-title">Steamed Milk</h4>
                            </div>
                        </div>
                    </>
                );
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

CoffeeIngredient.propTypes = {
    type : propTypes.string.isRequired
};

export default CoffeeIngredient;
