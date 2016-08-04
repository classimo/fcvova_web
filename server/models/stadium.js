/**
 * Created by paulius on 03/08/16.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
  _id : { type: 'Number', required: true},
  name : { type: 'String', required: true },
  shortName : { type: 'String', required: true },
  addressLine : { type: 'String', required: true },
  city : { type: 'String', required: true },
});

stadiumSchema.set('collection', 'stadiums');

export default mongoose.model('Stadium', stadiumSchema);
