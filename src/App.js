import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './students/reducers';
import Router from './Router';

// All class-based components must have
// a render method.
class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store} style={{ flex: 1 }}>
        <Router />
      </Provider>
    );
  }
};

export default App;
