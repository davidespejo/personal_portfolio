import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './elements/header/header';
import Styles from './elements/styles/styles';
import { routes } from './config/routes';
import RouteElement from './interfaces/route.interface';

export default function App() {
    return (
        <div className='application'>
            {/* <Header /> */}
            <Switch>
                {routes.map((route: RouteElement) => {
                    return (
                        <Route
                            exact
                            path={route.path}
                            component={route.component}
                            key={`route-${route.path}`}
                        />
                    );
                })}
            </Switch>
            <Styles />
        </div>
    );
}
