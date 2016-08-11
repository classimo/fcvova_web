/**
 * Created by paulius on 03/08/16.
 */

import { ADD_FIXTURES, GET_NEXTGAME } from './Actions';

// Initial State
const initialState = { data: [] };

const FixturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIXTURES :
      return {
        data: action.fixtures
      };
    default:
      return state;
  }
};

//Get all team's fixtures
export const getTeamFixtures = (state) => state.fixtures.data;

//Get next team's fixture
export const getNextTeamFixture = (state) => state.fixtures.data[0];

// Export Fixtures Reducer
export default FixturesReducer;
