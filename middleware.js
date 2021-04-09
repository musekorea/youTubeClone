import routes from './routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'MyTube';
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthenticated: true,
  };
  next();
};
