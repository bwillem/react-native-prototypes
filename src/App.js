import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './AppReducer';
import Router from './Router';

// All class-based components must have
// a render method.
class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} style={{ flex: 1 }}>
        <Router />
      </Provider>
    );
  }
};

export default App;
