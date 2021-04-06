export const homeController = (req, res) =>
  res.render('home', { pageName: 'Home' });

export const searchController = (req, res) => {
  const searchingBy = req.query.term;
  console.log(req);
  /* const {
    query: { term: searchingBy },
  } = req; */
  res.render('search', { pageName: 'Search', searchingBy: searchingBy });
};

export const videoController = (req, res) =>
  res.render('videos', { pageName: 'Videos' });
export const uploadController = (req, res) =>
  res.render('upload', { pageName: 'Upload' });
export const videoDetailController = (req, res) =>
  res.render('videoDetail', { pageName: 'Video Detail' });
export const editVideoController = (req, res) =>
  res.render('editVideo', { pageName: 'Edit Video' });
export const deleteVideoController = (req, res) =>
  res.render('deleteVideo', { pageName: 'Delete Video' });
