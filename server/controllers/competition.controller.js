/**
 * Created by paulius on 03/08/16.
 */
import Competition from '../models/competition';

/**
 * Get stadium by id
 * @param req
 * @param res
 * @returns void
 */
export function getCompetitionById(req, res) {
  Competition.findOne({ _id:req.params.id}).exec((err, competition) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ competition });
  });
}

export function getAllCompetitions(req, res) {
  Competition.find().exec((err, competitions) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ competitions });
  });
}
