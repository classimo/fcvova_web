/**
 * Created by paulius on 03/08/16.
 */
import { Router } from 'express';
import * as CompetitionController from '../controllers/competition.controller';
const router = new Router();

// Get all teams
// router.route('/teams').get(PostController.getAllTeams);

// Get competition by id
router.route('/competitions/:id').get(CompetitionController.getCompetitionById());

// Get competitions all of them
router.route('/competitions').get(CompetitionController.getAllCompetitions());

export default router;
