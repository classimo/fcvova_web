/**
 * Created by paulius on 03/08/16.
 */

import { GET_FIXTURES } from './Actions';

// Initial State
const initialState = { data: [] };

const FixturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIXTURES :
      return {
        data: action.fixtures
      };
    default:
      return state;
  }
};

//Get all team's fixtures
export const getTeamFixtures = (state) => state.fixtures.data;

// Export Fixtures Reducer
export default FixturesReducer;
