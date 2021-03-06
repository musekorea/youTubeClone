import routes from '../routes';
import Video from '../models/Video';

export const homeController = async (req, res) => {
  try {
    const videos = await Video.find().sort({ _id: 1 });
    res.render('home', {
      pageName: 'Home',
      videos: videos,
    });
  } catch (error) {
    console.log(error);
    res.render('home', { pageName: 'Home', videos: [] });
  }
};
export const searchController = async (req, res) => {
  const searchingBy = req.query.term;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: 'i' },
    });
  } catch (error) {
    res.render('search', {
      pageName: 'Search',
      searchingBy: searchingBy,
      videos,
    });
  }
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
    res.render('videoDetail', { pageName: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getEditVideoController = async (req, res) => {
  const id = req.params.id;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', { pageName: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideoController = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  try {
    await Video.findOneAndUpdate(
      { _id: id },
      { title: title, description: description }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideoController = async (req, res) => {
  const id = req.params.id;
  try {
    await Video.findByIdAndRemove({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    res.redirect(routes.home);
  }
};
