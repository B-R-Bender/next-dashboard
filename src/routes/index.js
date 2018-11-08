import React from "react";
import {Switch, Router, Route} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Dashboard from "../screens/Dashboard";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    </Router>
);

export default AppRouter;