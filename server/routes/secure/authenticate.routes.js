/**
 * Created by paulius on 15/08/16.
 */
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/user';

const router = new Router();

// Authenticate
router.post('/authenticate', (req, res) => {
  User.findOne({ name: req.body.name }, (err, user) => {
    if(err){
      res.status(500).send(err);
    }
    if(!user){
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      if(user.password != req.body.password){
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        var token = jwt.sign(user, 'superSecret',{
          expiresIn : 60*60*24
        });
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
});

export default router;
