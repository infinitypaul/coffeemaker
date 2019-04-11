import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import {connect} from "react-redux";

class Layout extends Component {
    render() {
        return (
            <>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                />
                <main className="py-4">
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );