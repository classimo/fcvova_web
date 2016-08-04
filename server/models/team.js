/**
 * Created by paulius on 27/07/16.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  leagueId: { type: 'Number', required: true },
  teamId: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  played: { type: 'Number', required: true },
  win: { type: 'Number', required: true },
  draw: { type: 'Number', required: true },
  loss: { type: 'Number', required: true },
  goals: { type: 'Number', required: true },
  conceded: { type: 'Number', required: true },
  difference: { type: 'Number', required: true },
  points: { type: 'Number', required: true },
  logo: { type: 'String', required: true },
});

teamSchema.set('colection', 'teams');

export default mongoose.model('Team', teamSchema);
