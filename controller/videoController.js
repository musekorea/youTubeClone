import { videos } from '../db';
import routes from '../routes';

export const homeController = (req, res) =>
  res.render('home', { pageName: 'Home', videos: videos });

export const searchController = (req, res) => {
  const searchingBy = req.query.term;
  //console.log(req);
  res.render('search', {
    pageName: 'Search',
    searchingBy: searchingBy,
    videos,
  });
};

export const videoController = (req, res) =>
  res.render('videos', { pageName: 'Videos' });
export const getUploadController = (req, res) =>
  res.render('upload', { pageName: 'Upload' });
export const postUploadController = (req, res) => {
  const file = req.body.file;
  const title = req.body.title;
  const description = req.body.description;
  res.redirect(routes.videoDetail(1));
};
export const videoDetailController = (req, res) =>
  res.render('videoDetail', { pageName: 'Video Detail' });
export const editVideoController = (req, res) =>
  res.render('editVideo', { pageName: 'Edit Video' });
export const deleteVideoController = (req, res) =>
  res.render('deleteVideo', { pageName: 'Delete Video' });
