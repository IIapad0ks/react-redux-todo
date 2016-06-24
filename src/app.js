/**
 * @file Application entry point
 * @module application
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import store from './store';
import ToDo from './components/ToDo';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <AppBar title={<span style={{ cursor: 'pointer' }}>ToDo</span>} />
        <ToDo />
      </div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('todo')
);
