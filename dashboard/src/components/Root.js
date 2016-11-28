import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import AccelerometerChart from './AccelerometerChart';
import Main from './main';

const RouterComponent = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/accelerometer" />
                <Route path="accelerometer" component={AccelerometerChart} />
            </Route>
        </Router>
    </Provider>
);

export default RouterComponent;
