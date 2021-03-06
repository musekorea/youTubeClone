import express from 'express';
import routes from '../routes';
import {
  userController,
  userDetailController,
  editProfileController,
  changePasswordController,
} from '../controller/userController';

const userRouter = express.Router();

userRouter.get(routes.users, userController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.userDetail(), userDetailController);

export default userRouter;
