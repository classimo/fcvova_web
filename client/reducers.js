/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import fixtures from './modules/LandingPage/FixturesReducer';
import posts from './modules/LandingPage/PostReducer';
import teams from './modules/LandingPage/TeamsReducer';




// Combine all reducers into one root reducer
export default combineReducers({
  app,
  intl,
  fixtures,
  posts,
  teams,
});
