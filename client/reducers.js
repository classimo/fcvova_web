/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import teams from './modules/LandingPage/TeamsReducer';
import fixtures from './modules/LandingPage/FixturesReducer';
import intl from './modules/Intl/IntlReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  teams,
  fixtures,
});
