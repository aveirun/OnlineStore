import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="h-100">
        <NavBar />
        <div className="pt-5">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Basket} exact />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  );
}

export default App;
