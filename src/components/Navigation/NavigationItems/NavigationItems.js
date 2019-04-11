import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <ul className="navbar-nav ml-auto">
                <NavigationItem link="/">Coffee Builder</NavigationItem>
                {props.isAuthenticated ?
                    <NavigationItem link="/orders">Orders</NavigationItem> : null}
                {!props.isAuthenticated
                    ? <NavigationItem link="/auth">Login/Register</NavigationItem>
                    : <NavigationItem link="/logout">Logout</NavigationItem>}
            </ul>
        </div>
    );
};


export default navigationItems;
