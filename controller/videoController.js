import routes from '../routes';
import Video from '../models/Video';

export const homeController = async (req, res) => {
  try {
    const videos = await Video.find();
    res.render('home', {
      pageName: 'Home',
      videos: videos,
    });
  } catch (error) {
    console.log(error);
    res.render('home', { pageName: 'Home', videos: [] });
  }
};
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
export const postUploadController = async (req, res) => {
  const file = req.file.path;
  const title = req.body.title;
  const description = req.body.description;
  console.log(`path=`, file, title, description);
  const newVideo = await Video.create({
    fileUrl: file,
    title,
    description,
  });
  console.log(newVideo);

  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetailController = async (req, res) => {
  const id = req.params.id;
  try {
    const video = await Video.findById(id);
    res.render('videoDetail', { pageName: 'Video Detail', video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const editVideoController = (req, res) =>
  res.render('editVideo', { pageName: 'Edit Video' });
export const deleteVideoController = (req, res) =>
  res.render('deleteVideo', { pageName: 'Delete Video' });
