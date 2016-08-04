/**
 * Created by paulius on 03/08/16.
 */
import { Router } from 'express';
import * as StadiumController from '../controllers/stadium.controller';
const router = new Router();

// Get stadium by id
router.route('/stadiums/:id').get(StadiumController.getStadiumById);

router.route('/stadiums').get(StadiumController.getAllStadiums);

export default router;
