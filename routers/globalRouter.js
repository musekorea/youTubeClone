import express from 'express';
import routes from '../routes';
import {
  getJoinController,
  postJoinController,
  getLoginController,
  postLoginController,
  logoutController,
} from '../controller/userController';
import {
  homeController,
  searchController,
} from '../controller/videoController';

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);

globalRouter.get(routes.join, getJoinController);
globalRouter.post(routes.join, postJoinController);

globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);

globalRouter.get(routes.logout, logoutController);

globalRouter.get(routes.search, searchController);

export default globalRouter;
