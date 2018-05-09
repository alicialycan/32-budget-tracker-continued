import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../category/dashboard.jsx';

import combineReducers from '../reducers/';
const store = createStore(combineReducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path = '/' component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;