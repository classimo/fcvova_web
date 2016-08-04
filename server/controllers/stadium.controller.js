/**
 * Created by paulius on 03/08/16.
 */
import Stadium from '../models/stadium';

/**
 * Get stadium by id
 * @param req
 * @param res
 * @returns void
 */
export function getStadiumById(req, res) {
  Stadium.find({ _id:req.params.id}).exec((err, stadiums) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ stadiums });
  });
}

export function getAllStadiums(req, res) {
  Stadium.find().exec((err, stadiums) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ stadiums });
  });
}
