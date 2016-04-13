var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Community = require('./components/community');
var Partners = require('./components/partners');
var Blog = require('./components/blog');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="community" component={Community} />
      <Route path="community/partners" component={Partners} /> // make this prettier
      <Route path="community/blog" component={Blog} /> // make this prettier
    </Route>
  </Router>
);
