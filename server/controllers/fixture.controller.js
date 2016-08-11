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
    // for(var i = 0; i < fixtures.length; i++){
    //   var fixture = fixtures[i];
    //   Team.find({ teamId: fixture.homeTeamId }).exec((err, team) => {
    //     if (err) {
    //       res.status(500).send(err);
    //     }
    //     fixture.homeTeamName = team[0].name;
    //     fixture.homeTeamLogo = team[0].logo;
    //     Team.find({ teamId: fixture.awayTeamId }).exec((err, team) => {
    //       if (err) {
    //         res.status(500).send(err);
    //       }
    //       fixture.awayTeamName = team[0].name;
    //       fixture.awayTeamLogo = team[0].logo;
    //
    //       Stadium.find({ _id: fixture.stadiumId }).exec((err, stadiums) => {
    //         if (err) {
    //           res.status(500).send(err);
    //         }
    //         fixture.stadiumAddress = stadiums[0].addressLine;
    //
    //         Competition.findOne({ _id: fixture.leagueId }).exec((err, competition) => {
    //           if (err) {
    //             res.status(500).send(err);
    //           }
    //           fixture.shortCompetitionNameEn = competition.shortNameEn;
    //           fixture.shortCompetitionNameLt = competition.shortNameLt;
    //
    //           fx[fx.length] = fixture;
    //           console.log(fx[fx.length]);
    //         });
    //       });
    //     });
    //   });
    // }
    // console.log(fx);
    res.json({ fixtures })
  });
}
