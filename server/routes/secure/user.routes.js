/**
 * Created by paulius on 16/08/16.
 */
import { Router } from 'express';
import User from '../../models/user';

const router = new Router();

router.post('/users', function(req, res) {
  User.findOne({ email: req.body.email}, function(err, users) {
    res.json(users);
  });
});

export default router;
