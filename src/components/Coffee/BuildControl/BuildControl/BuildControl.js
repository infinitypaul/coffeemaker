import React from 'react';

const buildControl = props => {
    return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={props.removed}
                        disabled={props.disabled}
                    >
                        <i className="fa fa-minus"> Remove</i>
                    </button>
                </div>
                <input type="text" className="form-control" placeholder={props.label} aria-label=""
                       aria-describedby="basic-addon1" readOnly />
                <div className="input-group-prepend">
                    <button className="btn btn-primary" onClick={props.added} type="button">
                        <i className="fa fa-plus"> Add</i>
                    </button>
                </div>
            </div>
    );
};

export default buildControl;
