export const joinController = (req, res) =>
  res.render('join', { pageName: 'Join' });
export const loginController = (req, res) =>
  res.render('login', { pageName: 'Login' });
export const logoutController = (req, res) =>
  res.render('logout', { pageName: 'Logout' });

export const userController = (req, res) =>
  res.render('users', { pageName: 'Users' });
export const userDetailController = (req, res) =>
  res.render('userDetail', { pageName: 'User Detail' });
export const editProfileController = (req, res) =>
  res.render('editProfile', { pageName: 'Edit Profile' });
export const changePasswordController = (req, res) =>
  res.render('changePassword', { pageName: 'Change Password' });
