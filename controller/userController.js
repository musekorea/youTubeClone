import routes from '../routes';

export const getJoinController = (req, res) =>
  res.render('join', { pageName: 'Join' });

export const postJoinController = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageName: 'Join' });
  } else {
    res.redirect(routes.home);
  }
};

export const getLoginController = (req, res) =>
  res.render('login', { pageName: 'Login' });

export const postLoginController = (req, res) => res.redirect(routes.home);

export const logoutController = (req, res) => res.redirect(routes.home);

export const userController = (req, res) =>
  res.render('users', { pageName: 'Users' });
export const userDetailController = (req, res) =>
  res.render('userDetail', { pageName: 'User Detail' });
export const editProfileController = (req, res) =>
  res.render('editProfile', { pageName: 'Edit Profile' });
export const changePasswordController = (req, res) =>
  res.render('changePassword', { pageName: 'Change Password' });
