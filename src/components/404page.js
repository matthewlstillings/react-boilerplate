import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>404 Error</p>
        <Link to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;