import routes from './routes';
import multer from 'multer';

const multerUpload = multer({ dest: 'upload/videos/' });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'MyTube';
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthenticated: true,
  };
  next();
};

export const uploadVideo = multerUpload.single('videoFile');
