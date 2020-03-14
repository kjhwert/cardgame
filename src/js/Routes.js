import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Player from "./Player";
import Card from "./Card";

export default function Routes () {
    return (
        <Router>
            <Route path="/" component={Player} />
            <Route path="/play" component={Card} />
        </Router>
    )
}