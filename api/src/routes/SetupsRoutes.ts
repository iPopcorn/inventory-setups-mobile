import express from 'express';
import controller from '../controllers/SetupsController';
const router = express.Router();

router.get('/setups', controller.getSetups);

export = router;