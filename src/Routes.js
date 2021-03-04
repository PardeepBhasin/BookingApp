import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import MovieDetails from './MovieDetails';
import BookingPage from './BookingPage';
import GenerateQRCode from './GenerateQRCode';
import App from './App';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/movieDetails" component={MovieDetails} />
                    <Route path="/bookingPage" component={BookingPage} />
                    <Route path="/generateQRCode" component={GenerateQRCode} />
                </Switch>
            </Router>
        )
    }
}