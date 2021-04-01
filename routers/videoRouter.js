import express from 'express';
import routes from '../routes';
import {
  videoController,
  uploadController,
  deleteVideoController,
  editVideoController,
  videoDetailController,
} from '../controller/videoController';

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoController);
videoRouter.get(routes.upload, uploadController);
videoRouter.get(routes.videoDetail, videoDetailController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);

export default videoRouter;
