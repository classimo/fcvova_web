/**
 * Created by paulius on 27/07/16.
 */
import Team from '../models/team';

/**
 * Get all league teams
 * @param req
 * @param res
 * @returns void
 */
export function getLeagueTeams(req, res) {
  Team.find({ leagueId: req.params.leagueId }).sort('-points').exec((err, teams) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ teams });
  });
}

export function getAllTeams(req, res) {
  Team.find().exec((err, teams) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ teams });
  });
}
