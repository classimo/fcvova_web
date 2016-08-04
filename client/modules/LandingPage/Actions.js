/**
 * Created by paulius on 27/07/16.
 */

import callApi from '../../util/apiCaller';

export const ADD_TEAMS = 'ADD_TEAMS';
export const ADD_FIXTURES = 'ADD_FIXTURES';

export function addTeams(teams) {
  return {
    type: ADD_TEAMS,
    teams,
  };
}

export function addFixtures(fixtures) {
  return {
    type: ADD_FIXTURES,
    fixtures,
  }
}

export function fetchTeamFixtures(teamId) {
  return (dispatch) => {
    return callApi(`fixtures/${teamId}`).then(res => dispatch(addFixtures(res.fixtures)));
  }
}


export function fetchLeagueTeams(leagueId) {
  return (dispatch) => {
    return callApi(`teams/${leagueId}`).then(res => dispatch(addTeams(res.teams)));
  };
}

export function fetchAllTeams() {
  return (dispatch) => {
    return callApi('teams').then(res => dispatch(addTeams(res.teams)));
  };
}
