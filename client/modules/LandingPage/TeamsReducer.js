/* Selectors */
import { ADD_TEAMS } from './Actions';

// Initial State
const initialState = { data: [] };

const TeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAMS :
      return {
        data: action.teams,
      };
    default:
      return state;
  }
};

// Get league table by leagueId
export const getLeagueTeams = (state) => state.teams.data;

// Get all teams
// export const getAllTeams = state => state.teams.data;

// Export Teams Reducer
export default TeamsReducer;
