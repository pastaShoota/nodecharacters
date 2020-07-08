import * as express from 'express';
import * as controller from './auth.controller';

const router = express.Router();

router
  .post('/login', (req, res, next) => controller.login(req, res, next));

export default router;
