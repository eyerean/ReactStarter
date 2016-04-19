var React = require('react');
var JobList = require('./job-list');

module.exports = React.createClass({
  render: function(){
    return <div>
      <h2>Jobs</h2>
      <JobList />
    </div>
  }
});
