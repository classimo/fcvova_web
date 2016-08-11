/**
 * Created by paulius on 27/07/16.
 */

import callApi from '../../util/apiCaller';

export const ADD_TEAMS = 'ADD_TEAMS';
export const ADD_FIXTURES = 'ADD_FIXTURES';
export const ADD_POSTS = 'ADD_POSTS';

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

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchTeamFixtures(teamId) {
  return (dispatch) => {
    return callApi(`fixtures/${teamId}`).then(res => {
      dispatch(addFixtures(res.fixtures));
    });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
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

