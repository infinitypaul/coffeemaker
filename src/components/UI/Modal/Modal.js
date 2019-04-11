import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'

class modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate() {
        console.log('module will update')
    }


    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    style={{
                        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : this.props.show ? 1 : 0
                    }}
                    className={classes.Modal}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                                <button type="button" onClick={this.props.modalClosed} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.modalClosed}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.modalContinued}>Continue</button>
                            </div>
                        </div>
                    </div>

            </>
        )
    }
}

export default modal;