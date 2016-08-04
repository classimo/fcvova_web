/**
 * Created by paulius on 27/07/16.
 */
import { Router } from 'express';
import * as TeamController from '../controllers/team.controller';
const router = new Router();

// Get league teams
router.route('/teams/:leagueId').get(TeamController.getLeagueTeams);

// Get all teams
router.route('/teams').get(TeamController.getAllTeams);

export default router;
