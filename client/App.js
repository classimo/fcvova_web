/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Import Routes
import routes from './routes';

// Material UI css
require('muicss/lib/css/mui.css');

// Base stylesheet
import styles from 'styles/main.css';

export default function App(props) {
  return (
    <Provider store={props.store}>
      <MuiThemeProvider>
        <IntlWrapper>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </IntlWrapper>
        </MuiThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
