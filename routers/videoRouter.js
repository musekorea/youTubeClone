import express from 'express';
import routes from '../routes';
import { uploadVideo } from '../middleware';
import {
  videoController,
  getUploadController,
  postUploadController,
  deleteVideoController,
  getEditVideoController,
  postEditVideoController,
  videoDetailController,
} from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoController);

videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo, postUploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);

videoRouter.get(routes.editVideo(), getEditVideoController);
videoRouter.post(routes.editVideo(), postEditVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;
