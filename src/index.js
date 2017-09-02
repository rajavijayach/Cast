import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import Header from './components/header';
import Home from './components/home';
import reducers from './reducers';
import Repository from './components/repository';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header companyName="TechScan"/>
        <Switch>          
          <Route path="/repositories/:tech" component={Repository} />
          <Route path="/" component={Home} />
        </Switch>
      </div>      
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
