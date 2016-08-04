/**
 * Created by paulius on 03/08/16.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  _id : { type: 'Number', required: true},
  name : { type: 'String', required: true },
  shortNameLt : { type: 'String', required: true },
  shortNameEn : { type: 'String', required: true },
  type : { type: 'String', required: true },
  descriptionLt: { type: 'String', required: true },
  descriptionEn: { type: 'String', required: true },
  year : { type: 'Number' },
});

competitionSchema.set('collection', 'competitions');

export default mongoose.model('Competition', competitionSchema);
