import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import cx from 'classnames';

const toolbar = props => {
    return (
        <nav className={cx('navbar navbar-expand-md navbar-light', classes.coffee)}>
            <div className="container">
                <Logo/>
                <NavigationItems isAuthenticated={props.isAuth} />
            </div>
        </nav>
    );
};



export default toolbar;
