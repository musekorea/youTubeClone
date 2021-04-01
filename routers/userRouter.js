import express from 'express';
import routes from '../routes';
import {
  userController,
  userDetailController,
  editProfileController,
  changePasswordController,
  testController,
} from '../controller/userController';

const userRouter = express.Router();

userRouter.get(routes.users, userController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.editProfile, editProfileController); //어떤 문자가 들어오건 매치가 가능해서 res.send로 끝나게 되버림
userRouter.get(routes.test, testController);
userRouter.get(routes.userDetail, userDetailController); //id를 넣었기 때문에 순서를 위에 넣으면

export default userRouter;
