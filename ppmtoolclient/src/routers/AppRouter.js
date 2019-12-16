import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from "../components/Dashboard";
import Header from "../components/Layout/Header";
import AddProject from "../components/Project/AddProject";
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addProject" component={AddProject} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
