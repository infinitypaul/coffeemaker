import React from 'react';
import { NavLink } from 'react-router-dom'

const navigationItem = props => {
    return (
        <li className="nav-item">
            <NavLink
                to={props.link}
                exact
                className="nav-link"
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default navigationItem;
