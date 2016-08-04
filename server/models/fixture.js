/**
 * Created by paulius on 02/08/16.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fixtureSchema = new Schema({
  leagueId: { type: 'Number', required: true },
  homeTeamId: { type: 'Number', required: true },
  awayTeamId: { type: 'Number', required: true },
  date: { type: 'Date', required: true },
  stadiumId: { type: 'Number', required: true },
  homeTeamName: { type: 'String', required: true },
  awayTeamName: { type: 'String', required: true },
  homeTeamLogo: { type: 'String', required: true },
  awayTeamLogo: { type: 'String', required: true },
  stadiumAddress: { type: 'String', required: true },
  shortCompetitionNameEn: { type: 'String', required: true },
  shortCompetitionNameLt: { type: 'String', required: true },
});

fixtureSchema.set('colection', 'fixtures');

export default mongoose.model('Fixture', fixtureSchema);
