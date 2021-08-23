import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './pages/Users';
import DebitForm from './pages/Debits/Form';
import DebitList from './pages/Debits/List';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Users} />
                <Route path="/User/DebitList" exact component={DebitList} />
                <Route path="/User/Debit" exact component={DebitForm} />
            </Switch>
        </BrowserRouter>       
    );
}
