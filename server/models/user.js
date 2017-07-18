/**
 * Created by paulius on 15/08/16.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  password: { type: 'String', required: true },
  admin: { type: 'Boolean', required: true },
});

userSchema.set('collection', 'users');

export default mongoose.model('User', userSchema);
