/**
 * Created by paulius on 02/08/16.
 */
import { Router } from 'express';
import * as FixtureController from '../controllers/fixture.controller';
const router = new Router();

// Get all teams
// router.route('/teams').get(PostController.getAllTeams);

// Get league teams
router.route('/fixtures/:teamId').get(FixtureController.getAllTeamsFixtures);

// router.route('/teams').get(TeamController.getAllTeams);

// Add a new Post
// router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;
