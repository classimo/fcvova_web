/**
 * Created by paulius on 02/08/16.
 */
import Team from '../models/team';
import Fixture from '../models/fixture';
import Stadium from '../models/stadium';
import Competition from '../models/competition';

export function getAllTeamsFixtures(req, res) {
  Fixture.find({ homeTeamId: req.params.teamId }).sort('-date').exec((err, fixtures) => {
    if (err) {
      res.status(500).send(err);
    }
    for(var i = 0; i < fixtures.length; i++){
      var fx = fixtures[i];
      Team.find({ teamId: fx.homeTeamId }).exec((err, team) => {
        if (err) {
          res.status(500).send(err);
        }
        fx.homeTeamName = team[0].name;
        fx.homeTeamLogo = team[0].logo;
        Team.find({ teamId: fx.awayTeamId }).exec((err, team) => {
          if (err) {
            res.status(500).send(err);
          }
          fx['awayTeamName'] = team[0].name;
          fx['awayTeamLogo'] = team[0].logo;

          Stadium.find({ _id: fx.stadiumId }).exec((err, stadiums) => {
            if (err) {
              res.status(500).send(err);
            }
            fx['stadiumAddress'] = stadiums[0].addressLine;

            Competition.findOne({ _id: fx.leagueId }).exec((err, competition) => {
              if (err) {
                res.status(500).send(err);
              }
              fx['shortCompetitionNameEn'] = competition.shortNameEn;
              fx['shortCompetitionNameLt'] = competition.shortNameLt;
              fixtures = fx;
              res.json({ fixtures });
            });
          });
        });
      });
    }
  });
}
