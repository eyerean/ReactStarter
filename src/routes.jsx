var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Careers = require('./components/careers');
var Jobs = require('./components/jobs');
var Job = require('./components/job');
var Community = require('./components/community');
var Partners = require('./components/partners');
var Blog = require('./components/blog');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="careers" component={Careers} />
      <Route path="careers/jobs" component={Jobs} /> {/* make this prettier */}
      <Route path="careers/jobs/:jobId" component={Job} /> {/* make this prettier */}
      <Route path="community" component={Community} />
      <Route path="community/partners" component={Partners} /> {/* make this prettier */}
      <Route path="community/blog" component={Blog} /> {/* make this prettier */}
    </Route>
  </Router>
);
